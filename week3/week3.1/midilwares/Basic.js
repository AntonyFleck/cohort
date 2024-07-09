const express=require("express");

const app=express();

app.get("/",(req,res,next)=>{
    console.log("You have 1");
   next();
},(req,res)=>{
    console.log("You have 2 ");
    res.send("nigga")
});

app.listen(3000);