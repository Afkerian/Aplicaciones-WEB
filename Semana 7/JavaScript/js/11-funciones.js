'use strict'

//Funciones son un grupo de instrucciones 
function mensaje(){
    console.log("Hola")
    alert("Bienvenido")
    return "ok"
}

//Llamar o invocar la funcion
var resultado = mensaje() 
console.log(resultado)

//Funciones sin parametros
function mensaje1(){
    console.log("Hola")
    alert("Bienvenido")
    return "ok"
}

//Funciones con parametros
function suma(num1 , num2){
    return num1+num2
}
var re = suma(3,5);

