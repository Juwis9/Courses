"use strict"

// Eventos
/*
const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    console.log(this.innerHTML);
})

boton.addEventListener("click", () => {
    console.log(this);
    this.location = "http://www.google.com";
})


const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){
    console.log("El boton se ha pulsado");
})

boton.addEventListener("mouseover", function(){
    console.log("El mouse está sobre el boton");
    this.style.backgroundColor = "rgb(15,25,53)";
})

boton.addEventListener("mouseout", function(){
    this.style.backgroundColor = "orange";
    console.log("El mouse salió del boton");
})

window.addEventListener("keydown", function(event){
    console.log("Pulsando tecla");
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener("keypress", function(event){
    console.log("Tecla siendo presionada");
})

window.addEventListener("keyup", function(event){
    console.log("Se soltó la tecla");
})

 window.addEventListener("load", function(){
     console.log("La página ha cargado completamente");
 })
const video = document.querySelector(".bostonvideo")




video.addEventListener("play", function(){
    console.log("El video ha iniciado");
})

video.addEventListener("seeking", function(){
    console.log("Se está buscando en el video");
})

video.addEventListener("pause", function(){
    console.log("El video se ha detenido");
})

video.addEventListener("ended", function(){
    console.log("El video ha terminado");
})
*/

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}


function stopChangeColor(){
    clearInterval(temporizador);
}

var temporizador = setInterval(function(){
    setColor();
}, 100);

var temporizador2 = setTimeout(function(){
    stopChangeColor()
}, 5000);