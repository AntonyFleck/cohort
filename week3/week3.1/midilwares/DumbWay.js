/*
If we have to validate the password/username in an post call then we have to write 
the same code agian and agian
*/

const express=require("express");

const app=express();

app.get("/health-checkup",(req,res)=>{
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;

    if(username!="ani" || password!="pass"){
        res.status(400).json({"msg":"Something is worng with your input"})
        return
    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({"msg":"Something is worng with your input"})
        return   
    }

    res.json({"msg":"Your kidney is fine"})
  
});

app.listen(3000);