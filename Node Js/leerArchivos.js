var fs = require('fs');

fs.readdir('./', (error,files)=>{
    if(error) throw error;
    console.log(files);
    var file = fs.readFileSync('./archivo.txt', 'UTF-8'); // Synchronous way of reading files
    // fs.readFile('./archivo.txt', 'UTF-8', (error,archivo)=>{ // Asynchronous way of reading files
    //     if(error) throw error;
    //     console.log(file);
    // });
    console.log('File Content');
    console.log(file);
});