"use strict"

// Arreglos

var platillos = ["ceviche", "tacos", "pizza"];
var bebidas = new Array( "Jamaica", "Horchata", "Limón");

console.log(Array.isArray(platillos),bebidas);
console.log("Hay " + platillos.length + " platillos en el menú");

var platillo = platillos[platillos.length-1];
console.log("El platillo seleccionado es: " + platillo);

var menu = [platillos, bebidas];
console.log(menu[1][2]);

console.log(platillos);
platillos.push("Tostadas");
console.log(platillos);
platillos.pop();
console.log(platillos);
var mensaje = platillos.join(" ");
console.log(mensaje);

var platillos2 = mensaje.split(" ");
console.log(platillos2);

var platillosHTML = Array.from(document.querySelectorAll(".platillos p"));
var arregloHTML  = platillosHTML.map(plato => plato.textContent);
console.log(arregloHTML);

var platillos3 = Array.of("ceviche", "tacos", "pizza");
console.log(platillos3);

console.log(platillos);
platillos.sort();
console.log(platillos);
platillos.reverse();
console.log(platillos);

var [platillo1, platillo2, platillo3] = platillos;

console.log(platillo1, platillo2, platillo3);

for(let i in platillos){
    console.log(platillos[i]);
}

platillos.forEach( (platillo,index) => console.log(index, platillo));

var pElegido = platillos.find( platillo => platillo == "tacos");
console.log(pElegido);

var menu = [
    {nombre: "Ceviche", precio: 20, pais: "Perú"},
    {nombre: "Tacos", precio: 10, pais: "México"},
    {nombre: "Pasta", precio: 50, pais: "Italia"},
    {nombre: "Quesadillas", precio: 15, pais: "México"}
]

var pElegido2 = menu.find(platillo => platillo.nombre == "Tacos");
console.log(pElegido2);
var pElegido3 = menu.findIndex(platillo => platillo.nombre == "Tacos");
console.log(pElegido3);
var pElegido4 = menu.filter(platillo => platillo.pais == "México");
console.log(pElegido4);
var some = menu.some(platillo => platillo.precio < 20);
console.log(some);
var every = menu.every(platillo => platillo.precio >= 10);
console.log(every);