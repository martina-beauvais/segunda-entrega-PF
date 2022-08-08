const toggleButton = document.getElementById('toggle-button')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
  

const botonDarkMode = document.getElementById('botonDarkMode')
const botonLightMode = document.getElementById('botonLightMode')
let darkMode
if(localStorage.getItem('theme')) {     //Si existe o no el item FALSO SI NO EXISTE, VERDADERO SI EXISTE
    darkMode = localStorage.getItem('theme')    //Consultar
} else {
    localStorage.setItem('theme', "light")          //Crear
}
if(darkMode == "dark") {
    document.body.classList.add('darkMode')
}
botonDarkMode.addEventListener("click", () => {
   // document.body.style.backgroundColor = "#000"
   // document.body.style.color = "#fff"
   document.body.classList.add('darkMode')
   localStorage.setItem('theme', "dark")  
})
botonLightMode.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#fff"
    //document.body.style.color = "#000"
    document.body.classList.remove('darkMode')
    localStorage.setItem('theme', "light")  
})