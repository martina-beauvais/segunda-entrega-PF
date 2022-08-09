// --- MI CUENTA ---
class Usuario {
    constructor(username, email, contraseña){
        this.username = username,
        this.email = email, 
        this.contraseña = contraseña
        
    }
}

const usuarios = []

/*if(localStorage.getItem('usuarios')) {
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}*/

const formUsuario = document.getElementById("idForm")

formUsuario.addEventListener('submit', (e) => {
    e.preventDefault()

   const username = document.getElementById("username").value;
   const email = document.getElementById("email").value

   const usuario = new Usuario(username,email)
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
   formUsuario.reset()

})
/*
const botonUsuarios = document.getElementById("botonUsuarios")
const divUsuarios = document.getElementById("divUsuarios")

botonUsuarios.addEventListener("click", () => {
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    let aux = '';
    usuarios.forEach(usuario => {
        aux += `<p class="resultado"> Username: ${usuario.username} </p>
        <p class="resultado"> Email: ${usuario.email}</p><hr>
        `
    });
    divUsuarios.innerHTML = aux;

});

const resultado = document.getElementById('infoUsuarios');

const mostrarUsuario = (usuario) => {
    let aux = '';
    aux += `<p class="resultado"> Username: ${usuario.username} </p>
            <p class="resultado"> Email: ${usuario.email} </p>`;
    resultado.innerHTML = aux;
}
*/
