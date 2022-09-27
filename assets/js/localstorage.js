const inputNombre = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputComentario = document.getElementById("cons")
const btnEnviar = document.getElementById("btnEnviar")

function guardarDatos() {
    localStorage.setItem("Nombre", inputNombre.value)
    localStorage.setItem("Email", inputEmail.value)
    localStorage.setItem("Comentario", inputComentario.value)
}

btnEnviar.addEventListener('click', guardarDatos)