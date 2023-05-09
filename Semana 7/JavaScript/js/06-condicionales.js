'use strict'

/**
 * if(condicion)
 * >
 * <
 * <=
 * >=
 * == -- ===
 * !=
 */

var edad =15

var nombre ="Ana"

if (edad>=18){
    console.log(nombre+" es mayor de edad")
    if(edad<=30){
        console.log(nombre+" eres joven")
    }else if(edad<=65){
        console.log(nombre+" eres anciano")
    }else{
        console.log(nombre+" eres un adulto mayor")
    }
}else{
    console.log(nombre+" eres menor de edad")
}

/**
 * Operadores Logicos
 * AND -> &&
 * OR -> ||
 * NOT -> !
 */

var anio=2022

if(anio!=2019){
    console.log("No estamos en el anio 2019")
}

if(anio>=2019 && anio<2023){
    console.log("Estamos en pandemia")
}