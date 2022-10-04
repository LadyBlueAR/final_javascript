const presupuesto = JSON.parse(localStorage.getItem("presupuesto"))
const btnFinalizar = document.getElementById("btn-finalizar")

/* Funciones */
function recuperoPresupuesto() {
    let tabla = document.getElementById("tablaPresupuesto")
    presupuesto.forEach(ilust => {
        let fila = `<tr id="row${ilust.id}">
                                    <td>${ilust.nombre}</td>
                                    <td>${ilust.precio}</td>
                                    <td><a id="btn${ilust.id}"<a class="waves-effect waves-light material-icons">delete</a></td>
                                <tr>`
                            tabla.innerHTML += fila
    });
}

function BotonEliminar() {
    presupuesto.forEach(ilust => {
        const btnPres = document.querySelector(`#btn${ilust.id}`)
        btnPres.addEventListener("click", () => EliminarPresupuesto(`${ilust.id}`))
    })
}

function calcularTotal () {
    const total = presupuesto.reduce((tot, pres) => tot + pres.precio, 0)
    let leyenda = document.getElementById("total")
    total > 0 ? leyenda.innerText = `El total de su compra será de $ ${total}` : leyenda.innerText = `No ha agregado nada al presupuesto.`
    total > 0 ? btnFinalizar.addEventListener("click", CompletarCompra) : btnFinalizar.addEventListener("click", CarritoVacio)
}

function EliminarPresupuesto(id) { 
    let indice = presupuesto.find ( p => p.id == id)
    let aEliminar = presupuesto.indexOf(indice,0)
    presupuesto.splice(aEliminar,1)
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
    let fila = document.getElementById(`row${id}`)
    fila.remove()
    calcularTotal()
}

function CompletarCompra() {
    Swal.fire({
        title: '¿Quieres completar la compra?',
        text: "Se te enviará un detalle por mail.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ff545452',
        cancelButtonColor: '#a52a2a',
        confirmButtonText: 'Comprar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Compra Realizada',
            'success'
          )
        }
      })
}

function CarritoVacio() {
    Swal.fire(
        '',
        'El presupuesto está vacío',
        'warning'
      )
}


/* LLamado a Funciones */
recuperoPresupuesto()
BotonEliminar()
calcularTotal()


