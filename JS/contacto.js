class Mensaje {
    constructor(email, mensajeDeConsulta){
        this.email = email, 
        this.mensajeDeConsulta = mensajeDeConsulta
    }
}

const consultas = []
const LocalStorage = window.localStorage;


const consulta = document.getElementById('contactoForm');

consulta.addEventListener('submit', (e) => {
    e.preventDefault();

    Swal.fire({
        title: `¡Tu consulta ha sido enviada exitosamente!`,
        confirmButtonText: '¡Gracias!',
        width: 600,
        padding: '3em',
        color: 'black',
        background: '#fff url(../imagenes/img-extras/buho-lector-bienvenida.png)', 
    })
})

