var http = require("http");

var servidor = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type":"text/html"});
    res.write("Respuesta de la direccion" + req.url);
    console.log("petición web");

});

servidor.listen(3000);
console.log("Ejecutandose servidor");