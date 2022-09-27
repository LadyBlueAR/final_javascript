class Ilustracion {
    constructor(id,nombre,tamanio,precio,entrega) {
        this.id = id;
        this.nombre = nombre;
        this.tamanio = tamanio;
        this.precio = precio;
        this.entrega = entrega;
    }
}

const ilustraciones = [];
const btnPresupuesto = document.getElementById("btn-presupuesto")
const tabla = document.getElementById("tabla")
const buscaIlustracion = document.getElementById("buscaIlustracion")
let presupuesto = [];



/* Funciones Generales */
function generador() {
    ilustraciones.push(new Ilustracion(01,"ILUSTRACIÓN PEQUEÑA - LINEART","500 x 500", 50, 1));
    ilustraciones.push(new Ilustracion(02,"ILUSTRACIÓN PEQUEÑA - BLANCO Y NEGRO", "500 x 500", 80, 2));
    ilustraciones.push(new Ilustracion(03,"ILUSTRACIÓN PEQUEÑA - COLOR", "500 x 500", 120, 2));
    ilustraciones.push(new Ilustracion(04,"ILUSTRACIÓN MEDIANA - LINEART" , "800 x 800", 140, 2));
    ilustraciones.push(new Ilustracion(05,"ILUSTRACIÓN MEDIANA - BLANCO Y NEGRO", "800 x 800", 170, 3));
    ilustraciones.push(new Ilustracion(06,"ILUSTRACIÓN MEDIANA - COLOR", "800 x 800", 210, 3));
    ilustraciones.push(new Ilustracion(07,"ILUSTRACIÓN GRANDE - LINEART", "1200 x1200", 250, 3));
    ilustraciones.push(new Ilustracion(08,"ILUSTRACIÓN GRANDE - BLANCO Y NEGRO", "1200 x 1200", 280, 5));
    ilustraciones.push(new Ilustracion(09,"ILUSTRACIÓN GRANDE - COLOR", "1200 x 1200",320, 5));    
} 

function cargarTabla() {
    let fila = ""
    ilustraciones.forEach( ilustracion => {
        fila = `<tr>
                    <td>${ilustracion.id}</td>
                    <td>${ilustracion.nombre}</td>
                    <td>${ilustracion.tamanio}</td>
                    <td>${ilustracion.precio}</td>
                    <td>${ilustracion.entrega}</td>
                    <td><a id="btn${ilustracion.id}"<a class="waves-effect waves-light btn">+</a></td>
                   
                </tr>`
                tabla.innerHTML += fila
    });
}

function Botones() {
    ilustraciones.forEach(ilu => {
        const btn = document.querySelector(`#btn${ilu.id}`)
        btn.addEventListener("click", ()=> agregarAPresupuesto(`${ilu.id}`))
    });
}
/* Funciones Presupuesto */
function agregarAPresupuesto(id) {
    const ilustracion = ilustraciones.find(ilu => ilu.id == id)
    presupuesto.push(ilustracion)
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto))
}
function recuperarPresupuesto() {
  if (localStorage.getItem("presupuesto")) {
    presupuesto = JSON.parse(localStorage.getItem("presupuesto"))
  }
}
/* Llamada Funciones */
generador()
cargarTabla()
Botones()
recuperarPresupuesto()


