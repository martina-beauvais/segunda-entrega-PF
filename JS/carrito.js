class Producto {
    constructor(id, nombre, precio, stock,imagen) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
    }
}
const producto = [
    {id: 0, nombre: "Una Eduación Mortal", autor: "Naomi Novik", precio: "350", stock: "456", imagen:"../imagenes/libros/Una-Educacion-Mortal-Naomi-Novik.png"},
    {id: 1, nombre: "Lore", autor:"Alexandra Bracken", precio: "400", stock:"1500", imagen: "../imagenes/libros/lore.jpg.png"},
    {id: 2, nombre: "Renegados", autor:"Marissa Meyer", precio: "300", stock: "21", imagen:"../imagenes/libros/renegados.png"},
    {id: 3, nombre: "Matar Un Reino", autor:"Alexandra Christo", precio: "250", stock: "783", imagen:"../imagenes/libros/Matar-Un-Reino-Alexandra-Christo.png"},
    {id: 4, nombre: "Sombra y Hueso (Estuche Trilogia)", autor: "Leigh Bardugo", precio:"827", stock: "581", imagen:"../imagenes/libros/shadow-and-bone-box.png"},
    {id: 5, nombre: "Caraval (Estuche Trilogia)", autor:"Stephanie Garber", precio:"910", stock:"13", imagen:"../imagenes/libros/Caraval-Boxed-Set.png"},
    {id: 6, nombre: "The Love Hypothesis (inglés)", autor: "Ali Hazelwood", precio: "640", stock: "141", imagen: "../imagenes/libros/the-love-hypothesis-ali-hazelwood-eng.png"},
    {id: 7, nombre: "La Puerta Secreta del Bosque", autor: "Melissa Albert", precio: "610", stock: "754", imagen: "../imagenes/libros/la-puerta-secreta-del-bosque-melissa-albert.png"},
    {id: 8, nombre: "Las Crónicas Lunares (Estuche en inglés)", autor: "Marissa Meyer", precio: "1000", stock: "832", imagen: "../imagenes/libros/cronicas-lunares-box-set.png"},
    {id: 9, nombre: "El Vals de la Bruja", autor: "Belén Martínez", precio: "454", stock: "1431", imagen: "../imagenes/libros/el-vals-de-la-bruja-belen-martinez.png"},
    {id: 10, nombre: "Al final mueren los dos", autor: "Adam Silvera", precio: "436", stock: "47", imagen: "../imagenes/libros/al-final-mueren-los-dos-adam-silvera.png"},
    {id: 11, nombre: "Rojo, Blanco y Azul", autor: "Casey McQuiston", precio: "658", stock: "976", imagen: "../imagenes/libros/rojo-blanco-y-azul-casey-mcquiston.png"},
    {id: 12, nombre: "Eleanor & Park", autor: "Rainbow Rowell", precio: "956", stock: "875", imagen: "../imagenes/libros/eleanor-&-park-rainbow-rowell.png"},
    {id: 13, nombre: "It Ends With Us", autor: "Colleen Hoover", precio: "876", stock: "547", imagen: "../imagenes/libros/it-ends-with-us-colleen-hoover.png"},
    {id: 14, nombre: "Un Cuento Perfecto", autor: "Elísabet Benavent", precio: "899", stock: "438", imagen: "../imagenes/libros/un-cuento-perfecto-elísabet-benavent.png"},
    {id: 50, nombre: "Positions Hat - Ariana Grande", precio: "850", stock: "102", imagen: "../imagenes/merch/positions-hat-ariana-grande.png"},
    {id: 51, nombre: "Levitating - Dua Lipa", precio: "800",stock: "240",imagen: "../imagenes/merch/dua-lipa-eco-friendly-bag.png"},
    {id: 52, nombre: "Heartstopper (Hi)", precio: "750",stock: "50",imagen: "../imagenes/merch/Heartstopper-hi.jpg.png"},
    {id: 53, nombre: "1989 - Taylor Swift, Crewneck Sweatshirt", precio: "1500",stock: "1323",imagen: "../imagenes/merch/Taylor-Swift-Crewneck-Sweatshirt.png"},
    {id: 54, nombre: "Heartstopper - Eco Bag", precio: "875", stock: "412", imagen: "../imagenes/merch/heartstopper-eco-bag.jpg"},
    {id: 55, nombre: "Pisces - Eco Bag", precio: "417", stock: "43", imagen: "../imagenes/merch/pisces-zodiac-eco-bag.png"},
    {id: 56, nombre: "Future Nostalgia - Dua Lipa", precio: "2500", stock: "135", imagen: "../imagenes/merch/dua-lipa-vinilo-future-nostalgia.png"},
    {id: 57, nombre: "Fearless (Taylor's Version)", precio: "3200", stock: "13", imagen: "../imagenes/merch/taylor-swift-vinilo-fearless(ts).png"},
    {id: 58, nombre: "CALM - 5SOS (CD)", precio: "1500", stock: "452", imagen: "../imagenes/merch/calm-5sos-cd.png"},
    {id: 59, nombre: "Olivia Rodrigo - Har", precio:"600", stock: "4324", imagen: "../imagenes/merch/OR-hat.png"},
    {id: 60, nombre: "Fine Line - Hoodie - Harry Styles", precio:"5450", stock: "867", imagen: "../imagenes/merch/Fine-Line-Hoodie-Harry-Styles.png"},
    {id: 61, nombre: "Blackpink", precio:"5700", stock: "237", imagen: "../imagenes/merch/BP-vinilo.png"}
]
const carrito = document.querySelector('#carrito');
const listaproductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaproductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}


// Funciones
// Función que añade el producto al carrito
function agregarProducto(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const producto = e.target.parentElement.parentElement;
         // Enviamos el producto seleccionado para tomar sus datos
         leerDatosProducto(producto);
    }
}

// Elimina el producto del carrito en el DOM
function eliminarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-producto') ) {
         // e.target.parentElement.parentElement.remove();
         const productoId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

         carritoHTML();
    }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(producto => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${producto.imagen}" width=100>
              </td>
              <td>${producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>${producto.cantidad} </td>
              <td>
                   <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
    });

}

// Elimina los productos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';


    // forma rapida (recomendada)
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}