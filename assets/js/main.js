const contenedor = document.getElementById("container")
const btnFetch = document.getElementById("btn-fetch")
const leyenda = document.getElementById("preview")
const URL = "assets/bbdd/cards.json"
var tarjetas = []
let contenidoHTML = ""

/* Fecth y Promesas */
const cargarPresupuesto = async ()=> {
    fetch(URL)
        .then(response => response.json())
        .then(data => tarjetas = data)
        .then(tarjetas => tarjetas.forEach(element => contenidoHTML += mostrarCard(element)))

        .catch(error => console.log(error))

        .finally(()=> contenedor.innerHTML = contenidoHTML)
}

btnFetch.addEventListener("click", () => {
    cargarPresupuesto()
    btnFetch.remove()
    leyenda.remove()
})
