var express = require("express");

var app = express();

app.all("/", (req, res)=>{
  res.send("Hola")
});

app.get("/acerca", (req, res)=>{
  res.send("Lorem Ipsum");
});

app.post("/acerca", (req, res)=>{
  res.send("Lorem Ipsum");
});

app.delete("/acerca", (req, res)=>{
  res.send("Lorem Ipsum");
});

app.put("/acerca", (req, res)=>{
  res.send("Lorem Ipsum");
});


var server = app.listen(3000, ()=>{
});