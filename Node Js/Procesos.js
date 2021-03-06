function param(p){
    var index = process.argv.indexOf(p)
    return process.argv[index+1];
}

console.log(`Tu nombre es ${param("--nombre")}`);
console.log(`Tu edad es: ${param("--edad")}`);
// correr junto con los parámetros --nombre "Marcos" --edad "25"
