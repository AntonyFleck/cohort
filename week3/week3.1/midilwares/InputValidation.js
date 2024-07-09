const express=require("express");

const app=express();
//For extracting body
app.use(express.json())
app.get("/",(req,res)=>{
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("You have "+kidneyLength+" kidneys");

});

//Global catch 4 inputs not three
//Written at last
app.use(function(err,req,res,next){
    res.send("WRONG NIGGA "+err)
})
app.listen(3000);