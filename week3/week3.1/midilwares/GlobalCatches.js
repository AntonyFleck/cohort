const express=require("express");
let NumberOfHits=0;

const app=express();

function RequestCounter(req,res,next){
    NumberOfHits+=1;
    console.log(NumberOfHits);
    next();
}

//means this middlewear  gets called in every route after it
app.use(RequestCounter);
app.use(express.json());
app.post("/",(req,res)=>{
    const kidneys=req.body.kidneys;
    const kl=kidneys.length;
    res.send("namaste "+ kl);
});

//Global Catches
//Whenever an error is occured in any route the control reaches here directly
//It has four parameters
app.use(function(err,req,res,next){
    res.send("Input not valid");
})
app.listen(3000);