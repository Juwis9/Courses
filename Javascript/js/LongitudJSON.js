"use strict"

var json = fetch("https://restcountries.eu/rest/v2/all")
    .then(data => data.json())
    .then(data => {
        console.log(data.length);
    });