"use strict"

//Trabajando con datos remotos
/*
var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");
var post = null
boton.addEventListener("click", function(){
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(data => {
        mostrarDatos(data);
    });
});

function mostrarDatos(datos){
    datos.map((datos) => {
        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = datos.id + "-" + datos.title;
        contenido.innerHTML = datos.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    });
}*/

var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");
var contenedor2 = document.getElementById("contenedor2");
var body = document.getElementsByTagName("body")[0];
var msgError = document.getElementById("msgError");
var posts = null;
var totCountries = 0;
window.addEventListener("load", function(){
    console.log("La página cargó");
});
function getPosts(){
    return fetch("http://jsonplaceholder.typicode.com/posts");
}

function getCountries(){
    return fetch("https://restcountries.eu/rest/v2/all");
}

boton.addEventListener("click", function(){
    console.log("El botón fue presionado");
    getPosts()
        .then(data => data.json())
        .then(posts =>{
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            totCountries = countries.lenght;
            mostrarBanderas(countries);
        })
        .catch(error=>{
            msgError.classList.toggle("hide");
            msgError.innerHTML = error;
            setTimeout(()=>msgError.classList.toggle("hide"),5000);
        });
});

function mostrarDatos(datos){
    datos.map( datos => {
        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = datos.id + "-" + datos.title;
        contenido.innerHTML = datos.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    });
}

function mostrarBanderas(datos){
    var cont = 0;
    var tabla = document.createElement("table");
    let row = document.createElement("tr");
    datos.map(datos => {
        let titulo = document.createElement("h1");
        let contenido = document.createElement("img");
        let celda = document.createElement("td");
        titulo.innerHTML = datos.name;
        contenido.src = datos.flag;
        contenido.width = 200;
        contenido.height = 100;
        celda.appendChild(contenido);
        row.appendChild(celda);
        if(cont == 4){
            tabla.appendChild(row);
            cont = 0;
            row = document.createElement("tr");
        }
        else{
            cont++;
        }
    });
    contenedor2.appendChild(tabla);
}