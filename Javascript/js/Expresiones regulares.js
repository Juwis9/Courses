"use strict";

var regEx = new RegExp("abc"); // Recomendado para expresiones largas

var regEx2 = /Hola mundo/; // Recomendado para expresiones cortas

var match = regEx.test("abjcdef");
console.log(match?"La cadena existe dentro":"La cadena no existe dentro");
match = regEx2.test("Hola mundo soy Juan");
console.log(match?"La cadena existe dentro":"La cadena no existe dentro");

var regEx3 = /[0-9]/;
match = regEx3.test("Susedión en 1996");
console.log(match?"La cadena existe dentro":"La cadena no existe dentro");

var regEx4 = /[^\d]\d-\d\d-\d\d\d\d/;
match = regEx4.test("A5-20-1996");
console.log(match?"La cadena existe dentro":"La cadena no existe dentro");

// + una o mas veces, * cero o más veces, ? puede o no aparecer

var regEx5 = /\d{2}/;
match = regEx4.test("A5-2L-1996"); //No existe por que la expresión no se cumple, no existen exactamente 2 caracteres juntos
console.log(match?"La cadena existe dentro":"La cadena no existe dentro");

// i es operador insensitive, por lo tanto no importa el uso de mayusculas y minúsculas

var regEx6 = /\d{2,}/.exec("45 50 60");
console.log(regEx6)

console.log("Hola Muundo".match(/Ho?[a-z]a Mu{2}ndo/));

// | = or

//^ = inicio  $ = final

console.log(/^H|a$/.test("Hola a todos los habitantes del planeta tierra"));

var fraseRemplazable = "Yo quiero comer pizza, pizza y más pizza";

console.log(fraseRemplazable.replace(/pizza/g, "tacos")); // g es operador global, para cambiar todas las apariciones y no solo la primera

// El método "".search() regresa el index en el cual se encuentra la expresión en cuestion

// Podemos iterar con expresiones regulares buscando x expresión en particular de la siguiente forma

var frase2 = "EL DIA De Hoy Me Apetece Empezar Todas Las Palabras Con Mayúsculas";
var regEx7 = /\b([A-Z]+)/g;
var prueba;
while(prueba = regEx7.exec(frase2)){
    console.log(prueba[0], prueba.index);
}

