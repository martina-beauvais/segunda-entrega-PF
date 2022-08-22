class Usuario {
    constructor(avatar, username, nombre, apellido, email, contraseña){
        this.avatar = avatar,
        this.username = username,
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email, 
        this.contraseña = contraseña
        
    }
}
const usuarios = []
const avatarperfil = document.getElementById("avatarPerfil")

async function avatarUsuario(){
    const avatar = await fetch('../JSON/avatar.json')
    const avatarParseado = await avatar.json()
    avatarParseado.forEach((src, indice) => {
    avatarperfil.innerHTML += `
        <img id="avatar${indice}" src="../avatar/${src.imagen}" alt=""
        class="perfilUsuario"
        style="width:70px; height: 70px;">
    `
    })
}

const perfilUsuario = document.getElementById("perfilUsuario")


avatarUsuario().then( () => {
    const avatar0 = document.getElementById("avatar0")
    const avatar1 = document.getElementById("avatar1")
    const avatar2 = document.getElementById("avatar2")
    const avatar3 = document.getElementById("avatar3")
    const avatar4 = document.getElementById("avatar4")
    const avatar5 = document.getElementById("avatar5")
    const avatar6 = document.getElementById("avatar6")
    const avatar7 = document.getElementById("avatar7")
    const avatar8 = document.getElementById("avatar8")
    const avatar9 = document.getElementById("avatar9")
    avatar0.addEventListener("click", () =>{
        perfilUsuario.src = avatar0.src
        perfilUsuario.classList.remove("avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-hombre-(1)")
        console.log(perfilUsuario)
    })
    avatar1.addEventListener("click", () =>{
        perfilUsuario.src = avatar1.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-hombre-(2)")
        console.log(perfilUsuario)
    })
    avatar2.addEventListener("click", () =>{
        perfilUsuario.src = avatar2.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-hombre-(3)")
        console.log(perfilUsuario)
    })
    avatar3.addEventListener("click", () =>{
        perfilUsuario.src = avatar3.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-hombre-(4)")
        console.log(perfilUsuario)
    })
    avatar4.addEventListener("click", () =>{
        perfilUsuario.src = avatar4.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-hombre-(5)")
        console.log(perfilUsuario)
    })
    avatar5.addEventListener("click", () =>{
        perfilUsuario.src = avatar5.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(2)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-mujer-(1)")
        console.log(perfilUsuario)
    })
    avatar6.addEventListener("click", () =>{
        perfilUsuario.src = avatar6.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(3)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-mujer-(2)")
        console.log(perfilUsuario)
    })
    avatar7.addEventListener("click", () =>{
        perfilUsuario.src = avatar7.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(4)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-mujer-(3)")
        console.log(perfilUsuario)
    })
    avatar8.addEventListener("click", () =>{
        perfilUsuario.src = avatar8.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)","avatar-mujer-(5)")
        perfilUsuario.classList.add("avatar-mujer-(4)")
        console.log(perfilUsuario)
    })
    avatar9.addEventListener("click", () =>{
        perfilUsuario.src = avatar9.src
        perfilUsuario.classList.remove("avatar-hombre-(1)", "avatar-hombre-(2)", "avatar-hombre-(3)", "avatar-hombre-(4)", "avatar-hombre-(5)", "avatar-mujer-(1)", "avatar-mujer-(2)", "avatar-mujer-(3)","avatar-mujer-(4)")
        perfilUsuario.classList.add("avatar-mujer-(5)")
        console.log(perfilUsuario)
    })
})


let infoUsuario
const perfilAvatar = document.getElementById("perfilUsuario")
perfilAvatar.addEventListener('click', (e) => {
    e.preventDefault()
        let avatar = perfilUsuario.classList[1]

        let usuario = new Usuario (avatar,nombre,username,apellido,email)
        usuarios.push(usuario)
        localStorage.setItem('Usuario', JSON.stringify(usuarios))

        infoUsuario = JSON.parse(localStorage.getItem('usuarios'))

    })