"use strict"
var boton = document.getElementById("boton");
var link = document.getElementsByTagName("link")[0];

boton.addEventListener("click", ()=>{
    if(link.href.endsWith("style1.css")){
        link.href="css/style2.css"
    }
    else if(link.href.endsWith("style2.css")){
        link.href="css/style3.css"
    }
    else{
        link.href="css/style1.css"
    }
});
    