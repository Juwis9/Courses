var exec = require('child_process').exec;

exec('dir', (error, stdout)=>{
    if(error){
        throw error;
    }
    console.log('Comando ejecutado');
    console.log(stdout);
});