"use strict"

// alert("Hola desde un archivo externo");

// Este es un mensaje de la consola
console.log("Hola consola");

var x = "3.1416"

var publicData = "Hola"



// Variables globales vs de bloque
var nombre = "Sergio";

console.log(nombre)

function saludo(){
    let nombre = "Pedro";
    console.log(nombre)
    
    let edad = 34;
    console.log(edad)
}

saludo();


/*
// Variables numéricas
var edad = 35;

var cantidad = "100";

var nuevaCantidad = Number(cantidad);

parseInt()
parseFloat()



// Variables cadena
var bebida = "agua";

var comida = 'ceviche';

var instrucción = "El platillo se llama 'ceviche'";

var edad = 34;

var edadtxt = String(edad);



// Variables booleanas
var activo = false;

var estado = Boolean(10 < 9);



// Variables de fecha
var fecha = new Date();

// Puedes usar el metodo getX(), donde X es el dato a buscar.
// Puedes forzar a cambiar la fecha usando setX()


// Variables de símbolo
var símbolo1 = Symbol();
var símbolo2 = Symbol();

var ambiente = Symbol("dev");
*/