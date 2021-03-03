"use strict"

// Alertas

const video = document.querySelector(".bostonvideo");
const boton = document.querySelector(".boton")
/*
video.addEventListener("ended", function(){
    alert("El video terminó");
});

video.addEventListener("ended", function(){
    let resultado = confirm("Desea ver el video nuevamente?");
    console.log(resultado);
    if(resultado){
        video.play();
    }
    else{
        window.location = "http://www.google.com";
    }
});
*/

boton.addEventListener("mouseout", function(){
    let email = prompt("El video terminó", "ejemplo@dominio.com");
    if (email == null || email == ""){
        console.log("Sin datos");
    }
    else{
        console.log(email);
    }
});