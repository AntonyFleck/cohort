const fs=require("fs");
function promisifyReadFile(){
 return new Promise(function(resolve){
    fs.readFile("/Users/anirudha/Documents/cohort/week1/Promises/abc.txt","utf-8",(err,data)=>{
        setTimeout(()=>{resolve(data)},3000);
    });
    //setTimeout(()=>{resolve(data)},3000);
 }) 
}

async function main(){
    let a=await promisifyReadFile();
    console.log("the data in the file",a);
}

main();
