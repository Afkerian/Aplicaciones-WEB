'use strict'

//transformacion de texto

var numero=1
var texto1="Hola "
var texto2="soy un texto"

//convertir numero a cadena
var num=numero.toString();
console.log(num)

var dato1=texto1.toUpperCase();
var dato2=texto2.toUpperCase();
console.log(dato1,dato2)

var nombre="Fernando";
console.log(nombre.length);

//concatenacion
var texto3=texto1.concat("con "+texto2);
console.log(texto3)

//  buscar coicidencia dentro de una cadena
var busqueda=texto1.indexOf("un")

//contar desde 0 como en vectores
var busqueda=texto1.indexOf("clase");
var busqueda=texto1.lastIndexOf("clase");//ultima aparicion
var busqueda=texto1.search("clase");//igual que indexOf sino existe devuelve -1
var busqueda=texto1.search("texto");
var busqueda=texto1.match(/clase/g);//devuelve una coleccion de los resultados que encuentre
var busqueda=texto1.substr(4,7);//saca desde el caracter 4 hasta el 7
var busqueda=texto1.charAt(5);//sacar una letra de una cadena
var busqueda=texto1.startsWith("clase");//true o false busca al inicio del string
var busqueda=texto1.endsWith("clase");//al final del string
var busqueda=texto1.includes("clase");//buscar en un string en una palabra
var busqueda=texto1.replace("clase", "aula");//cambiar un texto por otro
var busqueda=texto1.slice(3);//separar un string a partir de un caracter
var busqueda=texto1.slice(3,6);//separar un string a partir de un caracter
var busqueda=texto1.split(" ");//separar un string a partir de un caracter en este caso por los espacios y los hace un array
var busqueda=texto1.trim();//quitar los espacios por delante y detras
console.log(busqueda);