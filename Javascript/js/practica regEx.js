"use strict";
var boton = document.getElementById("boton");
var usuario = document.getElementById("correo");
var regExEmail = /^\w+([-\+\_\.]?\w)*@\D{4,8}\.\D{2,3}$/;
var regExTwitter = /^@?(\w+)$/g;
boton.addEventListener("click", () => {
    regExTwitter.test(usuario.value)?alert("El correo es valido"):alert("El correo es inválido")
});