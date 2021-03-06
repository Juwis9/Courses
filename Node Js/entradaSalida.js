var questions = ["Whats your name?", "How old are you?", "What was your first pet?", "What did you want to be when you grew up?"];
var ans = [];

function ask(i){
    process.stdout.write(questions[i]);
}

process.stdin.on("data", d=>{
    ans.push(d.toString().trim());
    console.log(ans);
    ans.length<questions.length?ask(ans.length):process.exit();

});

ask(0);