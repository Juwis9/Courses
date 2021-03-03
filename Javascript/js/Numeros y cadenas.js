"use strict"
/*
//Propiedades numéricas

console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);
console.log("NaN: ", Number.NaN);

var numero = "10.30";

console.log("Number: ", typeof numero, typeof Number(numero));
console.log("parseInt: ", parseInt(numero));
console.log("parseFloat: ", parseFloat(numero));
console.log("inNaN: ", isNaN(numero));
console.log("inInteger: ", Number.isInteger(numero));

var numero2 = 2.5

console.log("toExponetial: ", numero2.toExponential());
console.log("toFixed: ", numero2.toFixed(2));
console.log("toPrecision: ", numero2.toPrecision(5));
console.log("toString: ", typeof numero2.toString())
*/

//Cadenas de texto

var mensaje = "           Estoy aprendiendo JavaScript y estoy aprendiendo mucho           ";
var comida = new String("Ceviche");

console.log("La cadena tiene: " + mensaje.length + " letras");

var resultado = mensaje.indexOf("c");
var ultimaAparicion = mensaje.lastIndexOf("c");
var busqueda = mensaje.search("Ja");
var expresionReg = mensaje.search(/ja/gi);// i ignora mayus o minus
var match = mensaje.match(/aprendiendo/gi);//g busca todas las coincidencias
var substr = mensaje.substr(6,11);//desde el caracter 6, cuenta 11 espacios; el caracter 6 forma parte de los 11
var substring = mensaje.substring(6,17); //retorna la cadena en contrada entre los caracteres 6 y 17
var charAt = mensaje.charAt(3);//retorna el caracter en el index 3
var startsWith = mensaje.startsWith("cript", resultado);
var endsWith = mensaje.endsWith("cho");
var includes = mensaje.includes("estoy", 32);
var repeat = mensaje.repeat(4);
var replace = mensaje.replace("mucho", "poco"); //No afecta el valor original
var slice = mensaje.slice(6, 12);
var split = mensaje.split(" ");
var trim = mensaje.trim();
var lowerCase = mensaje.toLowerCase();
var upperCase = mensaje.toUpperCase();
var concatenar = mensaje.concat("el dia de hoy");
var plantilla = `Me gusta el ${comida}`;
var plantilla2 = `Wow!
al programar con JavaScript
puedo comer ${comida}`;
console.log(resultado);
console.log(ultimaAparicion);
console.log(busqueda);
console.log(expresionReg);
console.log(match);
console.log(substr);
console.log(substring);
console.log(charAt);
console.log(startsWith);
console.log(endsWith);
console.log(includes);
console.log(repeat);
console.log(replace);
console.log(slice);
console.log(split);
console.log(trim);
console.log(lowerCase);
console.log(upperCase);
console.log(concatenar);
console.log(plantilla);
console.log(plantilla2);