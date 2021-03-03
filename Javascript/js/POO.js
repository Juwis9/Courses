"use strict"

var body = document.getElementsByTagName("body")[0];
var div = document.createElement("div");
var h1 = document.createElement("h1");
h1.innerHTML = "Esto es creado con JavaScript en lugar de HTML"; 
div.appendChild(h1);
body.appendChild(div);



//POO
class Producto{
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    get infoTienda(){
        console.log("Productos de la tienda ACME");
    }
    set garantia(value){
        this.tiempoGarantia-=value;
    }
    get garantia(){
        return this.tiempoGarantia;
    }
}
class Pantalla extends Producto{
    constructor(numSerie, marca, modelo, pulgada){
        super(numSerie);
        this.marca=marca;
        this.modelo=modelo;
        this.pulgada=pulgada;
    }
    encendido(){
        this.garantia = 10;
        console.log("La pantalla se encendió");
    }
    apagado(){
        console.log("La pantalla se apagó");
    }
    set peso(value){
        this.kgs=value.trim();
    }

    get peso(){
        return this.kgs;
    }

}

const tvSala = new Pantalla("1568", "Lg", "120AG", 59);