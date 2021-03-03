"use strict"

//********************************
//*** Entendiendo el DOM y el BOM

var boton = document.getElementById("boton");
var todosLosParrafos = document.getElementsByTagName("p");
var parrafosPorClase = document.getElementsByClassName("principal")[0];
window.localStorage.setItem("Jorge", "22 años");

var foto = document.createElement("img");
foto.src = "img/foto1.JPG";
foto.name = "Aeropuerto";
foto.width = 800;
document.body.appendChild(foto);

foto.addEventListener("mouseover", function(){
    foto.src = "img/foto2.jpg";
});
foto.addEventListener("mouseout", function(){
    foto.src = "img/foto1.jpg"
});

foto.addEventListener("click", function(){
    window.history.forward();
    //window.history.back();
    //window.history.go(3);
});

boton.addEventListener("click", function () {
    console.log(window.location.href);
    console.log(todosLosParrafos);
    console.log(parrafosPorClase.textContent);
    //window.location.href = 'http://google.com';
    boton.style.backgroundColor = "Blue";
    boton.style.color = "White";
    boton.style.width = "100px";
    var contenido = window.localStorage.getItem("Jorge");
    parrafosPorClase.innerHTML = contenido;
});

console.log("La altura de la ventana es: " + window.innerHeight);
console.log("La achura de la ventana es: " + window.innerWidth);