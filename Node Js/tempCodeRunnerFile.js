fs.acces way
fs.access(file2, fs.constants.F_OK,(err) =>{
    if(err){
        fs.writeFile(file2, newContent2, (error)=>{
            if(error) throw error;
            fs.readFile(file2, "UTF-8", (err,data)=>{
                if(err) throw err;
                console.log(`The file has been saved, its content is: ${data}`);
            });
        });
    }
    else{
        let text
        fs.readFile(file2, "UTF-8", (err,data)=>{
            if(err) throw err;
            text = data;
        });
        if(text === newContent2) console.log(`The file content is the same and it's: ${text}`);
        else{
            fs.writeFile(file2, newContent2, (error)=>{
                if(error) throw error;
                fs.readFile(file2, 'UTF-8', (error,data)=>{
                    if(error) throw error;
                    console.log(`Overwriting text from 2 file...\nThe new content is: ${data}`);
                });
            });
        } 
    }
});