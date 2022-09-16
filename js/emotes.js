class Emote {
    constructor(nombre,tamanio,precio) {
        this.nombre = nombre.toUpperCase();
        this.tamanio = tamanio;
        this.precio = parseFloat(precio);
    }
}

const emoteA = new Emote("Emote Pequeño", "28 x 28", 10);
const emoteB = new Emote("Emote Mediano", "56 x 56", 20);
const emoteC = new Emote("Emote Grande", "112 x 112", 30);

class Paquete {
    
    constructor(Emote, cantidad, precio) {
        this.Emote = Emote;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

/* Array de paquetes */
const paquetes = [];
paquetes.push (new Paquete(emoteA.nombre,5,40));
paquetes.push (new Paquete(emoteB.nombre,5,90));
paquetes.push (new Paquete(emoteC.nombre,5,140));

function consultaPaquetes () {
    for (paquete of paquetes) {
        console.log("PAQUETE " + paquetes.indexOf(paquete) + "\n" + paquete.Emote + " X " + paquete.cantidad + "\n" + "VALOR: $" + paquete.precio)

    }
}



/* Funciones */
function presupuesto () {

    let tamanio = prompt("Elije el tamaño de tus emojis (A/B/C)").toUpperCase();
    let cantidad = prompt("Escribe la cantidad requerida");

    /* Control de errores */
    if (tamanio != "A" && tamanio != "B" && tamanio != "C") {
        alert("El tamaño ingresado no es válido");
        return;
    }
    if ( isNaN(cantidad) ) {
        alert("La cantidad ingresada no es válida");
        return;
    } else {
        
    }

    calcularTotal(tamanio,cantidad);
    
}

function calcularTotal (tamanio,cantidad) {
    
    if (tamanio == "A") {
        total = emoteA.precio * cantidad;
        alert("El total de su pedido es de: " + total + " pesos")
    } else if (tamanio == "B") {
        total = emoteB.precio * cantidad;
        alert("El total de su pedido es de: " + total + " pesos")
    } else if (tamanio == "C") {
        total = emoteC.precio * cantidad;
        alert("El total de su pedido es de: " + total + " pesos")
    } 
}
