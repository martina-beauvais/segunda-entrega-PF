// --- COMPONENTES DEL CARRITO ---//
class Carrito {
  constructor(id, nombre, precio, stock, imagen) {
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock,
    this.imagen = imagen
  }
}

let carrito = [];
let productos = []; 

const divisa = '$';
const productosEnElCarrito = document.querySelector('#productosEnCarrito');
const carritoId = document.querySelector('#carrito');
const total = document.querySelector('#total');
const finalizarCompra = document.querySelector('#boton-finalizar');
const LocalStorage = window.localStorage;

// --- FETCH --- //
fetch("../JSON/productos.json")
  .then(response => response.json())
  .then(data => {
      productos = data
      renderizarProductos(productos)
      return renderizarCarrito()
})

// --- PRODUCTOS EN EL HTML --- //
function renderizarProductos() {
  productos.forEach((producto) => {
        // --- DIV DEL PRODUCTO --- //
        const miNodo = document.createElement('div');
        miNodo.classList.add( 'mb-5', 'col-10', 'col-sm-4');

        // --- BODY DEL PRODUCTO --- //
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', 'width=18rem');

        // --- TITULO DEL PRODUCTO --- //
        const miNodoTitle = document.createElement('h4');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = producto.nombre;

        // --- IMAGEN DEL PRODUCTO --- //
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', producto.imagen);

        // --- PRECIO DEL PRODUCTO --- //
        const miNodoPrecio = document.createElement('h5');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${producto.precio}`;

        // --- BOTON PARA AÑADIR --- // 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-outline-dark');
        miNodoBoton.textContent = 'Agregar al carrito +';
        miNodoBoton.setAttribute('marcador', producto.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        productosEnElCarrito.appendChild(miNodo);

    });
}

// --- GUARDAR PRODUCTO EN EL CARRITO, NOTIFICAR LA ACCION POR MEDIO DE SWEETALERT Y GUARDAR EN LOCAL STORAGE --- //
function añadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));

    renderizarCarrito();

    // --- SWEETALERT --- //
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        background: '#E99E75',
        color: 'black',  
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer),
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Producto añadido al carrito'
    })

    guardarCarritoEnLocalStorage();

}

// --- PRODUCTOS EN CARRITO --- //
function renderizarCarrito() {

    carritoId.textContent = '';

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((producto) => {

        const miProducto = productos.filter((itemProductosEnCarrito) => {
            return itemProductosEnCarrito.id === parseInt(producto);
        });
        const numeroUnidadesItem = carrito.reduce((total, productoId) => {
          return productoId === producto ? total += 1 : total;
      }, 0);
      
      // --- PRODUCTO EN EL CARRITO --- //
        const miNodo = document.createElement('li')
        miNodo.classList.add('list-group-horizontal-sm', 'p-5');
        miNodo.style.width = '100%';
        miNodo.style.height = '50%';
        miNodo.textContent =` (${numeroUnidadesItem}) ${miProducto[0].nombre} - ${divisa}${miProducto[0].precio}`;

        // --- BOTON PARA ELIMINAR PRODUCTO --- //
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-outline-dark', 'mx-6');
        miBoton.textContent = 'x';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.producto = producto;
        miBoton.addEventListener('click', borrarItemCarrito);

        // --- IMAGEN DEL PRODUCTO --- //
        const imagenNodo = document.createElement('img');
        imagenNodo.classList.add('imagenEnCarrito');
        imagenNodo.getAttribute('src');   
        imagenNodo.src = `${miProducto[0].imagen}`; 
        imagenNodo.type = 'imagen';

        miNodo.appendChild(imagenNodo);
        miNodo.appendChild(miBoton);
        carritoId.appendChild(miNodo);

    });
    total.textContent = calcularTotal();
    localStorage.setItem("Carrito", JSON.stringify(carrito))
    guardarCarritoEnLocalStorage();

}

// --- BORRAR PRODUCTO MEDIANTE SU ID --- //
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.producto;

    // --- SWEETALERT --- //
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro que desea remover este producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí!',
        cancelButtonText: '¡No!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'El producto ha sido removido',
            'success',
              carrito = carrito.filter((carritoId) =>{
                  return carritoId !== id ;
            }),
            renderizarCarrito(),
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'El producto no ha sido removido',
            'error'
          )
        }
      });
      guardarCarritoEnLocalStorage();
}

// --- TOTAL --- //
function calcularTotal() {
    return carrito.reduce((total, productosEnCarrito) => {
        // De cada elemento obtenemos su precio
        const miProducto = productos.filter((itemProductosEnCarrito) => {
            return itemProductosEnCarrito.id === parseInt(productosEnCarrito) ;
        });
        // Los sumamos al total
        return total + miProducto[0].precio;
    }, 0).toFixed(2) ;

}

// --- FINALIZAR COMPRA --- //
finalizarCompra.addEventListener('click', () => {

  // --- SWEETALERT + LIMPIAR CARRITO (Y LOCAL STORAGE) AL FINALIZAR LA COMPRA --- //

  if(carrito.length <= 0){
    Swal.fire({
      title: `Ups... El carrito está vacío`,
      confirmButtonText: 'Añadir productos',
      width: 600,
      padding: '3em',
      color: 'black',
      background: '#fff url(../imagenes/img-extras/buho-lector-bienvenida.png)', 
  })
  }else{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: true
    })
    swalWithBootstrapButtons.fire({
      title: '¿Finalizar compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí!',
      cancelButtonText: '¡No!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Finalizar compra',
          'Será dirigido a una nueva página para elegir el método para abonar.',
          'success',
          carrito = [],
        )
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        localStorage.clear(renderizarCarrito())
      }
  })
}})

// --- GUARDAR PRODUCTO EN LOCAL STORAGE --- //
function guardarCarritoEnLocalStorage () {
  LocalStorage.setItem('Carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
  // ¿Existe un carrito previo guardado en LocalStorage?
  if (LocalStorage.getItem('Carrito') !== null) {
      // Carga la información
      carrito = JSON.parse(LocalStorage.getItem('Carrito'));
  }
}
// --- INICIO --- //
cargarCarritoDeLocalStorage();
renderizarCarrito();
renderizarProductos();
