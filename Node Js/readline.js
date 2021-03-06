var readline = require("readline");
var person = require("./exportarModulos");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Whats your name?", (ans)=>{
    person.uName = ans;
    process.stdout.write(`Hola ${ans}\nTell me a comment: `);
});

rl.on('line', (input)=>{
    if(input==="Exit"){
        console.log(`Me dijiste ${person.comments}`);
        process.exit();
    }
    person.comments.push(input.trim());
    rl.setPrompt("Tell me a comment: ");
    rl.prompt();
});

