'use strict'

function listadoFrutas(fruta1, fruta2, ... restoFrutas){
    console.log("Fruta 1: "+fruta1)
    console.log("Fruta 2: "+fruta2)
    console.log("Fruta 3: "+restoFrutas)
}

listadoFrutas("Pina", "limon","pera", "Manzana", "Fresa")
var frutas = ["Uva", "Coco"];
listadoFrutas(...frutas, "bananas", "sandia")