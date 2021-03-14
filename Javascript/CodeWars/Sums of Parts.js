function partsSums(ls) {
    var res = [ls.reduce((tot,x)=>tot+=x,0)];
    for(let x of ls){
        res.push(res[res.length-1]-x);
    } 
    return res;
}
ls = [1,2,3,4,5,6]
console.log(partsSums(ls));