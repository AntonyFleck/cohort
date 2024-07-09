const fs=require("fs");
fs.readFile("week1/fs/a.txt","utf-8",function(err,data){
    console.log(err);
    console.log(data);
    data=data+" REVELS 24";
    fs.writeFile("week1/fs/a.txt",data,(err)=>{
        if(err)
            console.log(err)
        else
            console.log("SUCCESS")
    })
    fs.readFile("week1/fs/a.txt","utf-8",function(err,data){
        console.log(err);
        console.log(data);
    });
})

// fs.readFile("week1/fs/a.txt","utf-8",function(err,data){
//     console.log(err);
//     console.log(data);
// });

console.log("Last statement");

fetch("some url")
    .then((value)=>{
        value.json()
            .then((result)=>{
                result
        })
    })