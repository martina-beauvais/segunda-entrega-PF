// --- MI CUENTA ---
class Usuario {
    constructor(username, email, contraseña){
        this.username = username,
        this.email = email, 
        this.contraseña = contraseña
        
    }
}

let usuarios = []

if(localStorage.getItem('usuarios')) {
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

const formUsuario = document.getElementById("idForm")


formUsuario.addEventListener('submit', (e) => {
    e.preventDefault()

   const username = document.getElementById("username").value;
   const email = document.getElementById("email").value

   let usuario = new Usuario(username,email)
   
   localStorage.setItem('Usuario', JSON.stringify(usuarios))
   usuarios.push(usuario)
   console.log(usuarios)
   formUsuario.reset()

   mostrarUsuario(usuario);

})

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

