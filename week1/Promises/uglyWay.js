const fs=require("fs")
function uglyReadFile(cb){
       fs.readFile("/Users/anirudha/Documents/cohort/week1/Promises/abc.txt","utf-8",(err,data)=>{
       setTimeout(()=>cb(data),3000);
       });
   }
   
console.log("statement before function call");

function cb(data){
   console.log("The data in the file:",data);
}

uglyReadFile(cb);
console.log("statement after function call");

