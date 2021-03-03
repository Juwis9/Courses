"use strict"
/*

// JSON -> JavaScript Object Notation

var persona = {nombre: "Sergio", twitter: "yacafx"};

var personas = [
    {nombre: "Juan", twitter: "Juanito50"},
    {nombre: "Juan40", twitter: "Juanito40"},
    {nombre: "Juan30", twitter: "Juanito30"},
    persona
]
    
var personaJSON = JSON.stringify(persona)

var nuevaPersona = JSON.parse(personaJSON)



// Operadores aritméticos

var datoA = 10;
var datoB = 20;

// SUMA +
var suma = datoA + datoB;
console.log('La suma de '+ datoA +' + '+ datoB +' es igual a: ', suma);

// RESTA -
var resta = datoA - datoB;
console.log('La resta de '+ datoA +' - '+ datoB +' es igual a: ', resta);

// MULTIPLICACIÓN *
var multiplicacion = datoA * datoB;
console.log('La multiplicación de '+ datoA +' * '+ datoB +' es igual a: ', multiplicacion);

// DIVISIÓN /
var division = datoA / datoB;
console.log('La división de '+ datoA +' / '+ datoB +' es igual a: ', division);

// MODULO O RESIDUO %
var modulo = datoA % datoB;
console.log('El módulo o residuo de '+ datoA +' % '+ datoB +' es igual a: ', modulo);

// INCREMENTO ++
var incremento = datoA;
incremento++;

//incremento = incremento+1
console.log('El incremento ++ de '+ datoA +' es igual a: ', incremento);


// DECREMENTO --
var decremento = datoA;
decremento--;

//decremento = decremento -1
console.log('El decremento -- de '+ datoA +' es igual a: ', decremento);



// Operadores relacionales

var datoA = 10;
var datoB = 20;

// MAYOR QUE >
var mayorQue = datoA > datoB;
console.log("Es "+ datoA + " mayor que " + datoB + ": " + mayorQue);

// MENOR QUE <
var menorQue =  datoA < datoB;
console.log("Es "+ datoA + " menor que " + datoB + ": " + menorQue);

// MAYOR O IGUAL QUE >=
var mayorOIgualQue =  datoA >= datoB;
console.log("Es "+ datoA + " mayor o igual que " + datoB + ": " + mayorOIgualQue);

// MENOR O IGUAL QUE <=
var menorOIgualQue =  datoA <= datoB;
console.log("Es "+ datoA + " menor o igual que " + datoB + ": " + menorOIgualQue);

// IGUAL QUE ==
var igualQue =  datoA == datoB;
console.log("Es "+ datoA + " igual que " + datoB + ": " + igualQue);

// NO ES IGUAL QUE O ES DIFERENTE QUE !=
var noEsIgualQue =  datoA != datoB;
console.log("Es "+ datoA + " no es igual o es diferente que " + datoB + ": " + noEsIgualQue);



// Operadores Lógicos

var datoA = 10;
var datoB = 20;

// OPERADOR Y o AND - &&
var and = (datoA > 10 && datoB > 10)
console.log('El resultado de la evaluación AND es: ' + and);

// OPERADOR O u OR - ||
var or = (datoA > 10 || datoB > 10);
console.log('El resultado de la evaluación OR es: ' + or);

// OPERADOR DE NEGACIÓN o NOT - !
var not = !(datoA > 10)
console.log('El resultado de la evaluación NOT es: ' + not);



// Operadores de asignación

var datoA = 10;

// ASIGNACIÓN SIMPLE
var igual = datoA;
console.log("El resultado de la asignación simple es: "+ igual);

// SUMAR Y ASIGNAR
var masIgual = 10;
masIgual += datoA;
console.log("El resultado de la asignación += es: "+ masIgual)

// RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= datoA;
console.log("El resultado de la asignación -= es: "+ menosIgual)

// MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignación *= es: "+ porIgual)

// DIVIDIR Y ASIGNAR
var entreIgual = 20;
entreIgual /= datoA;
console.log("El resultado de la asignación /= es: "+ entreIgual)



// Operador negativo

var datoA = 10;
var datoB = -datoA;
console.log("El valor de datoA es "+ datoA +", después del operador negativo datoB: "+ datoB);



//Operadores de concatenación

var datoA = 10;
var datoB = 20;

var nombre = "Sergio";
var apellido = "Brito";

// CONCATENACIÓN DE NÚMEROS
var concatNumeros = datoA + datoB;
console.log("Los números "+ datoA +" y "+ datoB +" usados como números concatenados hacen una suma igual a: ", concatNumeros);

// CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + " " + apellido ;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);

// CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt  = "2"+"8" ;
console.log("Los números 2 y 8 usados como texto se unen para formar: ", concatNumComoTxt);

// CONCATENACIÓN DE TEXTO Y NUMERO
var concatTxtNum = datoA + "8" ;
console.log("El número "+ datoA +" usado como número y 8 como texto se unen para formar: ", concatTxtNum);


// Operador ternario o condicional

var datoA = 110;
var datoB = 20;

// Condición ? TRUE : FALSE
var resultado = datoA > datoB ? "Si es mayor" : "No es mayor";
console.log("El resultado con el operador ternario u operador condicional es: ", resultado);



// Operador de tipo de datos

var datoA = 10; // Número

var nombre = "Playa"; // Cadena de texto

var activo = true // Boleano

var persona = {
	edad: 34, // Número
	deporte: 'Correr' // Cadena de texto
} // Objeto

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);
console.log(typeof persona);
console.log(typeof persona.edad);
console.log(typeof persona.deporte);



// Condiciones

var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if (datoA > datoB){
    resultado = "La condición se cumplió";
    
    if (datoC < datoB){
		 if (datoC < datoB){
		resultado = "Evaluación anidada verdadera";
        } else { 
            resultado = "No se cumplió la evaluación anidada";
        }
	} else { 
		resultado = "No se cumplió la evaluación anidada";
	}

} else { 
	resultado = "No se cumplió la evaluación";
}

console.log("El resultado de la evaluación anidada es: ", resultado);

Estructura SWITCH

// Evaluación con números
var edad = 40;
var resultado = "";

switch (edad) {
    case 10:
		resultado = "La edad es 10 años";
	break;
	case 20:
		resultado = "La edad es 20 años";
	break;
    case 30:
		resultado = "La edad es 30 años";
    break;
    case 40:
		resultado = "La edad es 40 años";
	break;
    default:
    	resultado = "Ningún caso coincide";
    break;
}


console.log("El resultado de la evaluación con números es: "+ resultado)

// Evaluación con cadena de texto
var producto = "Radio";

switch (producto) {
    case "TV":
		resultado = "Se eligió la TV";
	break;
	case "Radio":
		resultado = "Se eligió el Radio ";
	break;
    case "Teléfono":
		resultado = "Se eligió el teléfono ";
	break;
    default:
    	resultado = "No se eligió ningún producto";
    break;
}

console.log("El resultado de la evaluación con texto es: "+ resultado)
*/