'use strict'

/**
 * let para variables locales
 * var para variables globales
 */

//  Ejemplo 1
var numero = 1;
console.log(numero);

if(true){
    var numero=7
    console.log(numero);
}
console.log(numero)

//  Ejemplo 2
var num = 2;
console.log(num);

if(true){
    let num=7
    console.log(num);
}
console.log(num)