class Carrito {
  constructor(id, nombre, precio, stock, imagen) {
    this.id = id,
    this.nombre = nombre,
    this.precio = precio, 
    this.stock = stock,
    this.imagen = imagen
  }
}

const productos = [
  {id: 0, nombre: "Una Eduación Mortal", autor: "Naomi Novik", precio: 350, stock: 456, imagen:"../imagenes/libros/Una-Educacion-Mortal-Naomi-Novik.png"},
  {id: 1, nombre: "Lore", autor:"Alexandra Bracken", precio: 400, stock:1500, imagen: "../imagenes/libros/lore.jpg.png"},
  {id: 2, nombre: "Renegados", autor:"Marissa Meyer", precio: 300, stock: 21, imagen:"../imagenes/libros/renegados.png"},
  {id: 3, nombre: "Matar Un Reino", autor:"Alexandra Christo", precio: 250, stock: 783, imagen:"../imagenes/libros/Matar-Un-Reino-Alexandra-Christo.png"},
  {id: 4, nombre: "Sombra y Hueso (Estuche Trilogia)", autor: "Leigh Bardugo", precio:827, stock: 581, imagen:"../imagenes/libros/shadow-and-bone-box.png"},
  {id: 5, nombre: "Caraval (Estuche Trilogia)", autor:"Stephanie Garber", precio:910, stock:13, imagen:"../imagenes/libros/Caraval-Boxed-Set.png"},
  {id: 6, nombre: "The Love Hypothesis (inglés)", autor: "Ali Hazelwood", precio: 640, stock: 141, imagen: "../imagenes/libros/the-love-hypothesis-ali-hazelwood-eng.png"},
  {id: 7, nombre: "La Puerta Secreta del Bosque", autor: "Melissa Albert", precio: 610,stock: 754, imagen: "../imagenes/libros/la-puerta-secreta-del-bosque-melissa-albert.png"},
  {id: 8, nombre: "Las Crónicas Lunares (Estuche en inglés)", autor: "Marissa Meyer", precio: 1000, stock: 832, imagen: "../imagenes/libros/cronicas-lunares-box-set.png"},
  {id: 9, nombre: "El Vals de la Bruja", autor: "Belén Martínez", precio: 454, stock: 1431, imagen: "../imagenes/libros/el-vals-de-la-bruja-belen-martinez.png"},
  {id: 10, nombre: "Al final mueren los dos", autor: "Adam Silvera", precio: 436, stock: 47, imagen: "../imagenes/libros/al-final-mueren-los-dos-adam-silvera.png"},
  {id: 11, nombre: "Rojo, Blanco y Azul", autor: "Casey McQuiston", precio: 658, stock: 976, imagen: "../imagenes/libros/rojo-blanco-y-azul-casey-mcquiston.png"},
  {id: 12, nombre: "Eleanor & Park", autor: "Rainbow Rowell", precio: 956, stock: 875, imagen: "../imagenes/libros/eleanor-&-park-rainbow-rowell.png"},
  {id: 13, nombre: "It Ends With Us", autor: "Colleen Hoover", precio: 876, stock: 547, imagen: "../imagenes/libros/it-ends-with-us-colleen-hoover.png"},  
  {id: 14, nombre: "Un Cuento Perfecto", autor: "Elísabet Benavent", precio: 899, stock: 438, imagen: "../imagenes/libros/un-cuento-perfecto-elísabet-benavent.png"},
  {id: 50, nombre: "Levitating - Dua Lipa", precio: 800,stock: 240,imagen: "../imagenes/merch/dua-lipa-eco-friendly-bag.png"},
  {id: 51, nombre: "Heartstopper (Hi)", precio: 750,stock: 50,imagen: "../imagenes/merch/Heartstopper-hi.jpg.png"},
  {id: 52, nombre: "Heartstopper - Eco Bag", precio: 875, stock: 412, imagen: "../imagenes/merch/heartstopper-eco-bag.jpg"},
  {id: 53, nombre: "Pisces - Eco Bag", precio: 417, stock: 43, imagen: "../imagenes/merch/pisces-zodiac-eco-bag.png"},
  {id: 54, nombre: "Future Nostalgia - Dua Lipa", precio: 2500, stock: 135, imagen: "../imagenes/merch/dua-lipa-vinilo-future-nostalgia.png"},
  {id: 55, nombre: "Fearless (Taylor's Version)", precio: 3200, stock: 13, imagen: "../imagenes/merch/taylor-swift-vinilo-fearless(ts).png"},
  {id: 56, nombre: "CALM - 5SOS (CD)", precio: 1500, stock: 452, imagen: "../imagenes/merch/calm-5sos-cd.png"},
  {id: 57, nombre: "Blackpink", precio:5700, stock: 237, imagen: "../imagenes/merch/BP-vinilo.png"}
]

let carrito = []

const divisa = '$';
const productosEnElCarrito = document.querySelector('#productosEnCarrito');
const carritoId = document.querySelector('#carrito');
const total = document.querySelector('#total');
const botonVaciar = document.querySelector('#boton-vaciar');
const mostrarProductos = document.querySelector('#mostrarProductos')


function renderizarProductos() {
    productos.forEach((info) => {
       //Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add( 'mb-5', 'col-10', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', 'width=18rem');
        // Titulo
        const miNodoTitle = document.createElement('h4');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('h5');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-outline-dark');
        miNodoBoton.textContent = 'Agregar al carrito +';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        productosEnElCarrito.appendChild(miNodo);

    });
}


function añadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'));

    renderizarCarrito();


    //SWEETALERT2 => Mostrar al usuario una notificacion cuando añade un producto al carrito 
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        background: '#E99E75',
        color: 'black',  
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Producto añadido al carrito'
    }).showToast();

}

function renderizarCarrito() {
    // Vaciamos todo el html
    carritoId.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = productos.filter((itemProductosEnCarrito) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemProductosEnCarrito.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item','imagen-carrito','text-right', 'p-5');
        miNodo.textContent = ` ${numeroUnidadesItem} x ${miItem[0].nombre} ${miItem[0].imagen}- ${divisa}${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-outline-dark', 'mx-6');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        carritoId.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    total.textContent = calcularTotal();
    localStorage.setItem("Carrito", JSON.stringify(carrito))

}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    //SWEETALERT2 => Muestro un alert de confirmación, para prevenir borrar un producto por accidente.
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
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
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
      localStorage.setItem("Carrito", JSON.stringify(carrito))

    // volvemos a renderizar
}

function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, productosEnCarrito) => {
        // De cada elemento obtenemos su precio
        const miItem = productos.filter((itemProductosEnCarrito) => {
            return itemProductosEnCarrito.id === parseInt(productosEnCarrito);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
    localStorage.setItem("Carrito", JSON.stringify(carrito))

}


function vaciarCarrito() {

    //SWEETALERT2 => Muestro un alert de confirmación, para prevenir borrar todos los productos en el carrito por accidente.
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro que desea eliminar todo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '¡Sí!',
        cancelButtonText: '¡No!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'Los productos han sido removidos',
            'success',

            carrito = [],
            // Renderizamos los cambios
        )} else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Los productos no han sido removidos',
            'error'
          )
        }
      })
      localStorage.setItem("Carrito", JSON.stringify(carrito))

}



// Eventos
botonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarCarrito();
renderizarProductos()

