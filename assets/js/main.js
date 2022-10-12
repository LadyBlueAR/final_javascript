const contenedor = document.getElementById("container")
const btnFetch = document.getElementById("btn-fetch")
const leyenda = document.getElementById("preview")
const URL = "assets/bbdd/cards.json"
var tarjetas = []
let contenidoHTML = ""

cargarPresupuesto = async ()=> {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        tarjetas = data
        tarjetas.forEach(element => contenidoHTML += mostrarCard(element));
    } catch (error) {

    } finally {
        contenedor.innerHTML = contenidoHTML
    }
}

btnFetch.addEventListener("click", () => {
    cargarPresupuesto()
    btnFetch.remove()
    leyenda.remove()
})
