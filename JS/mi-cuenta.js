// --- MI CUENTA ---
class Usuario {
    constructor(username, nombre, apellido, email, contraseña){
        this.username = username,
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email, 
        this.contraseña = contraseña
        
    }
}

const usuarios = []

const formUsuario = document.getElementById("idForm")

formUsuario.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;

    const usuario = new Usuario(username,nombre,apellido,email)
      usuarios.push(usuario)

    localStorage.setItem('Usuario', JSON.stringify(usuarios))

   //SWEETALERT2 => Alert de bienvenida para el usuario con su username.
    Swal.fire({
    title: `¡Bienvenido, ${usuario.username}!`,
    confirmButtonText: '¡Gracias!',
    width: 600,
    padding: '3em',
    color: 'black',
    background: '#fff url(../imagenes/img-extras/buho-lector-bienvenida.png)', 
  })
  
    console.log(usuarios)
    setTimeout(() => {
    location.href="../pages/inicio.html"
  }, 1000)
})


const idFormIS = document.getElementById("idFormIS")

idFormIS.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById("usernameIS").value;
    const email = document.getElementById("emailIS").value;
    const usuario = new Usuario(username,email)
        usuarios.push(usuario)

    localStorage.setItem('Usuario', JSON.stringify(usuarios))
    infoLocalUsuario = JSON.parse(localStorage.getItem("Usuarios"))

   //SWEETALERT2 => Alert de bienvenida para el usuario con su username.
    Swal.fire({
    title: `¡Bienvenido, ${usuario.username}!`,
    confirmButtonText: '¡Gracias!',
    width: 600,
    padding: '3em',
    color: 'black',
    background: '#fff url(../imagenes/img-extras/buho-lector-bienvenida.png)', 
    })
    console.log(usuarios)
    setTimeout(() => {
        location.href="../pages/inicio.html"
    }, 500)
})