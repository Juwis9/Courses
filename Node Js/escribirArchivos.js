const fs = require('fs'),
      file = './test.txt',
      file2 = './test2.txt',
      newContent1 = 'This is the 1 file content...',
      newContent2 = 'This is the 2 file content...',
      additionalText = 'This is another line...';
// Check if the file exists
// fs.existsSync way
if(fs.existsSync(file)){
    let text = fs.readFileSync(file,"UTF-8");
    if(text === newContent1) console.log(`The file content is the same and it's: ${text}`);
    else{
        fs.writeFileSync(file, newContent1);
        console.log('Overwriting text from 1 file...\nThe new content is: ' + fs.readFileSync(file,"UTF-8"));
    } 
}
else{
    // Write a file
    fs.writeFileSync(file, newContent1);
    console.log('The file has been saved, its content is: ' + fs.readFileSync(file,"UTF-8"));
}


//fs.acces way
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


fs.appendFileSync(file, additionalText);
console.log("Adding one more text line to the 1 file...\nThe new content is: " + fs.readFileSync(file,'UTF-8'))


fs.appendFile(file2, additionalText, (error)=>{
    if(error) throw error;
    fs.readFile(file2, 'UTF-8', (error,data)=>{
        if(error) throw error;
        console.log(`Adding one more text line to the 2 file...\nThe new content is: ${data}`);
    });
});

// Beware, as they're asynchronous functions they have no order between them, that's why the 2nd file doesn't get the extra line at the end

