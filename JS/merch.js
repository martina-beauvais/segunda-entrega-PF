const producto = [
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

let id, nombre, precio, stock, imagen

const divMerch = document.getElementById('merch')
producto.forEach(arrayProductos => {
    divMerch.innerHTML += `    
    <div class="mb-5 col-10 col-md-4 position-static">
        <div class="card libros" style="width: 18rem;">
            <div class="card-book" style="width: 18rem;">
                <a href="#">
                    <img src="${arrayProductos.imagen}" class="card-img-top" alt="..."> 
                </a>
                <div class="card-body">
                    <h4 class="card-title">${arrayProductos.nombre}</h4>
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
