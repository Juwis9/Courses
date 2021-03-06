const fs = require('fs');
if(!fs.existsSync("img")){
    fs.mkdirSync('img');
    console.log('Folder created');
}
else console.log('The folder already exists');


if(!fs.existsSync("css")){
    fs.mkdir('css', (error)=>{
        if(error) throw error;
        console.log(`Folder created`);
    });
}
else{
    console.log('The folder already exists');
}

/* You could rename or move your file with fs.rename() or fs.renameSync(), to rename use the same path, for moving it use another one.
For renaming the 'Hi.js' file into "bye.js":
    fs.renameSync("./Hi.js", "./Bye.js");
For moving the 'Hi.js' file to the img folder:
    fs.renameSync("./Hi.js", "./img/Hi.js"); 
fs.unlink()/fs.unlinkSync deletes a file*/