//This basically intro to asynchronous property of JavaScript 
//Promise is just another class that JS provides you
//The promise is returned synchronously but the data comes once resolve is called
//fs is also a LIBRARY just like SetTimeout but it not available in the global scope
//promise chaining???
//A Promise has 3 states Pending, Resolved and Rjected
//Basically 3 ways to use asynchronous fns callbacks,promises,async awawit
//The function you pass in the Promise class ka constructor gets called
//eventually which then calls resolve(a function) in the code which signals it to .then() 

const fs=require("fs");
function promisifyReadFile(){
 return new Promise(function(resolve){
    fs.readFile("/Users/anirudha/Documents/cohort/week1/Promises/abc.txt","utf-8",(err,data)=>{
    console.log(a);
    console.log("hello from inside promise");
    resolve(data);
    console.log(a);
    console.log(a);
    });
 }) 
}

console.log("statement before function call");

let a=promisifyReadFile()
console.log(a);
a.then((data)=>{
    console.log("The data in the file:",data);
    console.log(a);
});

console.log("statement after function call");
console.log(a);
//The control reaches to .then(fn(arg)) when resolve(arg) gets called...

function promisifideFileREd(){
    const p=Promise(function(resolve){
    })
    return p
}