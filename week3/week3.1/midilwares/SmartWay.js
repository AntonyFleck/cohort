/*
Moving pre-checks to some other place that place is called
a middleware 
*/
const express=require("express");
let NumberOfHits=0;

const app=express();

function RequestCounter(){
    NumberOfHits+=1;
    console.log(NumberOfHits);
}

//means this middlewear  gets called in every route after it
app.use(express.json());
app.use(RequestCounter);
app.get("/",(req,res)=>{
    res.json({
        "msg":"namaste"
    })
});

app.listen(3000)