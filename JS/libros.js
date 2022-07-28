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
    {id: 14, nombre: "Un Cuento Perfecto", autor: "Elísabet Benavent", precio: "899", stock: "438", imagen: "../imagenes/libros/un-cuento-perfecto-elísabet-benavent.png"}
]

let id, nombre, autor, precio, stock, imagen


const divLibros = document.getElementById('libros')
producto.forEach(arrayProductos => {
    divLibros.innerHTML += `    
    <div class="mb-5 col-10 col-md-4">
        <div class="card libros" style="width: 18rem;">
            <div class="card-book" style="width: 18rem;">
                <a href="#">
                    <img src="${arrayProductos.imagen}" class="card-img-top" alt="..."> 
                </a>
                <div class="card-body">
                    <h4 class="card-title">${arrayProductos.nombre}</h4>
                    <p class="card-text">${arrayProductos.autor}</p>                        
                    <h5 class="card-price">$${arrayProductos.precio}</h5>
                    <div class="submit">
                        <button id="${arrayProductos.id}" class="btn btn-outline-dark">Añadir al carrito </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
