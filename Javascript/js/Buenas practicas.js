"use strict";
console.time("Marca1");

//Como declarar variables

var mensaje = "Hola mundo",
    estado = "activo",
    resultado = 45;

// Es mejor declarar variables según objetos, para evitar colisiones en caso de usar varias librerias

var datos = {
    mensaje: "hola"
};
datos.resultado = 120;
function saludar(){
    console.log(datos.mensaje);
    console.log(datos.resultado);
}

saludar();

// Hay que tener cuidado con las palabras reservadas

// Tenemos que evitar operaciones innecesarias
var animales = ["Caballo", "Perro", "Gato"];
var totalAnimales = animales.length;
// De esta manera evitamos que el programa calcule 3 veces la longitud del arreglo, ayudando a mejorar su rendimiento
for(let i = 0; i<totalAnimales; i++){
    console.log(animales[i]);
}

// Al igual que con las variables, es preferible hacer métodos que funciones anónimas, pues es más fácil dar mantenimiento

datos.decirHola = function (){
    return `${this.mensaje}, ${this.resultado} soy la funcion`;
};

console.log(datos.decirHola());

// Una buena práctica es iterar un objeto con la variación for...in

for(let dato in datos){
    console.log(dato, datos[dato]);
}

// Es importante validar la existencia de variables

// El operador ternario es muy util

var estado = true;
console.log(estado?"Hola":"Adios");

// Triple igual compara tipo y valor, doble igual interpreta los tipos y solo compara el valor
console.log(1=="1"?"Es igual":"No es igual"); // Igual pues compara valores
console.log(1==="1"?"Es igual":"No es igual"); // No es igual pues tiene tipo diferente

// Importante inicializar los objeto
function Persona(name, age, school){
    this.name = name;
    this.age = age;
    this.school = school;
}

var juan = new Persona("Juan", 15, "La Salle");
for(let dato in juan){
    console.log(`${dato}: ${juan[dato]}`);
}

// En caso de tratarse de ciclos, es conveniente hacer try and catch desde afuera en lugar de en cada iteración
try{
    for (let index = 0; index <= totalAnimales; index++) {
        console.log(animale[index]);//forzamos el error escribiendo "animale", en lugar de "animales"
    }
}
catch(error){
    console.log("Hubo un error en un el ciclo for");
}

// Si se necesitan pocas propiedades, o datos en objetos y arreglos respectivamente, es mejor usar literales

// Objetos
function Animal(){
    this.name = "Gato";
    this.age = 2;
}

var gatito = new Animal(); // Para usar muchos datos

var Humano = {}; // Para usar pocos datos
Humano.nombre = "Pedro";
Humano.edad = 45;

// Arreglos
var lista = new Array(); // Para usar muchos datos
lista[0] = "Manzana";
lista[1] = "Pera";

var lista2 = ["Manzana", "Pera"]; //Para usar pocos datos

// Usar camel Case
var camelCase = "";

// Usando Snake Case
var snake_case = "";

// Mayus para constante y snake case
const CONSTANTE_UNO = "";

// La indentación es muy importante, y siempore usar ";"
// Usar abreviaturas fáciles de entender
// Siempre comentar secciones del programa
// JSDoc ayuda a comentar
// JSLint ayuda como consejos para tener un código más limpio
// Debemos procurar incorporar los scripts al final de html


// Evitemos la duplicidad de código

// Este conjunto de operaciones puede ser realizado en una sola línea con una función "suma"
var cuenta = 2+3;
var cuentaNueva = 5+15;
var cuentaTotal = cuenta + cuentaNueva;
console.log(cuentaTotal);

// De la siguiente manera logramos reducir el número de veces que escribimos la misma instrucción
function suma(datoA, datoB){
    var res = datoA + datoB;
    return res;
}

cuentaTotal = suma(suma(2,3), suma(5,15));
console.log(cuentaTotal);

// Siempre evitemos dependencias, es mejor mantener todos los eventos en javascritp en lugar de HTML
// Podemos evitar el uso de llaves si en nuestros bloques solo usamos una línea

if(true) console.log("No tengo llaves!");

// Usar JSON es una buena alternativa a XML

// join es mucho mejor que concat

var listaAnimales = animales.join(", ");
console.log(listaAnimales); // Devuelve un string con los objetos separados por los caracteres dentro de los parámetros
var nuevaLista = animales.concat(); 
console.log(nuevaLista); //Devuelve un arreglo

// Podemos hacer pruebas de rendimiento con la función console.time()
console.time("Marca");
var tot = 0;
for (let index = 0; index < 100; index++) {
    tot += index;
    
}
console.log(tot);
console.timeEnd("Marca");
// Cuidado, cada navegador arrojará diferente tiempo
// Minificar código ayuda a disminuir el tiempo que tarda en ejecutar cada lína de comando
console.timeEnd("Marca1");

console.time("Marca2")
"use strict";function saludar(){console.log(datos.mensaje),console.log(datos.resultado)}function Persona(a,o,e){this.name=a,this.age=o,this.school=e}function Animal(){this.name="Gato",this.age=2}function suma(a,o){return a+o}var mensaje="Hola mundo",estado="activo",resultado=45,datos={mensaje:"hola",resultado:120};saludar();var animales=["Caballo","Perro","Gato"],totalAnimales=animales.length;for(let a=0;totalAnimales>a;a++)console.log(animales[a]);datos.decirHola=function(){return`${this.mensaje}, ${this.resultado} soy la funcion`},console.log(datos.decirHola());for(let a in datos)console.log(a,datos[a]);console.log((estado=!0)?"Hola":"Adios"),console.log("Es igual"),console.log("No es igual");var juan=new Persona("Juan",15,"La Salle");for(let a in juan)console.log(`${a}: ${juan[a]}`);try{for(let a=0;totalAnimales>=a;a++)console.log(animale[a])}catch(a){console.log("Hubo un error en un el ciclo for")}var gatito=new Animal,Humano={nombre:"Pedro",edad:45},lista=[];lista[0]="Manzana",lista[1]="Pera";var lista2=["Manzana","Pera"],camelCase="",snake_case="";const CONSTANTE_DOS="";var cuenta=5,cuentaNueva=20,cuentaTotal=cuenta+cuentaNueva;console.log(cuentaTotal),cuentaTotal=suma(suma(2,3),suma(5,15)),console.log(cuentaTotal),console.log("No tengo llaves!");var listaAnimales=animales.join(", ");console.log(listaAnimales);var nuevaLista=animales.concat();console.log(nuevaLista),console.time("Marca");var tot=0;for(let a=0;100>a;a++)tot+=a;console.log(tot),console.timeEnd("Marca");
console.timeEnd("Marca2");

// JSHint ayuda con posibles errores
// Siempre debemos utilizar las librerías que estén en actualización constante pues de lo contrario, en caso de usar una librería muy vieja, podemos sufrir de cualquier tipo de brecha en la seguridad de nuestra aplicación
// Mocca sirve para testing de aplicaciones