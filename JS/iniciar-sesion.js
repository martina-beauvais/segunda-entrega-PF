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

const formUsuarioIS = document.getElementById("idFormIS")

formUsuarioIS.addEventListener('submit', (e) => {
    e.preventDefault()

    let username = document.getElementById("usernameIS").value;
    let email = document.getElementById("emailIS").value;
    let usuario = new Usuario(username,email)
        usuarios.push(usuario)

    localStorage.setItem('Usuario', JSON.stringify(usuarios))

   //SWEETALERT2 => Alert de bienvenida para el usuario con su username.
    Swal.fire({
    title: `¡Bienvenido nuevamente, ${usuario.username}!`,
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

