/* Clase Ilustración */

class Ilustracion {
    constructor(nombre,tamanio,precio,entrega) {
        this.nombre = nombre;
        this.tamanio = tamanio;
        this.precio = precio;
        this.entrega = entrega;
    }
}

/* Ilustraciones */
const ilu1 = new Ilustracion("ILUSTRACIÓN PEQUEÑA - LINEART","500 x 500", 50, 1);
const ilu2 = new Ilustracion("ILUSTRACIÓN PEQUEÑA - BLANCO Y NEGRO", "500 x 500", 80, 2);
const ilu3 = new Ilustracion("ILUSTRACIÓN PEQUEÑA - COLOR", "500 x 500", 120, 2);
const ilu4 = new Ilustracion("ILUSTRACIÓN MEDIANA - LINEART" , "800 x 800", 140, 2);
const ilu5 = new Ilustracion("ILUSTRACIÓN MEDIANA - BLANCO Y NEGRO", "800 x 800", 170, 3);
const ilu6 = new Ilustracion("ILUSTRACIÓN MEDIANA - COLOR", "800 x 800", 210, 3);
const ilu7 = new Ilustracion("ILUSTRACIÓN GRANDE - LINEART", "1200 x1200", 250, 3);
const ilu8 = new Ilustracion("ILUSTRACIÓN GRANDE - BLANCO Y NEGRO", "1200 x 1200", 280, 5);
const ilu9 = new Ilustracion("ILUSTRACIÓN GRANDE - COLOR", "1200 x 1200",320, 5);

const ilustraciones = [];
ilustraciones.push(ilu1,ilu2,ilu3,ilu4,ilu5,ilu6,ilu7,ilu8,ilu9);

/* Listar todas las ilustraciones por pantalla utilizando DOM*/
let btnListar = document.getElementById("listarIlustraciones")
btnListar.addEventListener("click", listarIlustraciones)


function listarIlustraciones () {
    let lista = document.querySelector(".sec ul")
    for (const ilustracion of ilustraciones) {
        const listaIlustraciones = document.createElement("li")
              listaIlustraciones.id="lineaIlustraciones"
              listaIlustraciones.innerText = ilustracion.nombre + "\t" + "(" + ilustracion.tamanio + ")" + "\t" + "$" + ilustracion.precio
              listaIlustraciones.className = "textoIlustraciones"
              lista.appendChild(listaIlustraciones);              
    }
}

/* Método Filter */
function buscarIlustracion() {
    let buscar = prompt("Ingrese la Ilustración a buscar: ").toUpperCase();     
    let busqueda = ilustraciones.filter((ilustracion) => ilustracion.nombre.includes(buscar));
    if (busqueda.length == 0) {
         console.log("Ningún resultado coincide con su búsqueda")
    } else {
         console.log(busqueda);
    }
 }