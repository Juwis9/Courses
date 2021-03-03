"use strict"

var body = document.getElementsByTagName("body")[0];
var div = document.createElement("div");
var h1 = document.createElement("h1");
h1.innerHTML = "Esto es creado con JavaScript en lugar de HTML"; 
div.appendChild(h1);
body.appendChild(div);

//Manejo de Errores

try{
    var x = y;
} catch{
    console.log(error);
}