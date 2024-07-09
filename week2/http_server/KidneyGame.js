const express=require("express");
const bodyParser = require("body-parser");

const app=express();

let users=[{
    name:"ani",
        kidneys :[{
            healthy: false
        }]
}];

//middleware
app.use(bodyParser.json());

//code can be simplified using filter
//Popular input type for get requests if we need inputs we send query paramters
app.get("/",(req,res)=>{
    let NumberOfKidenys=users[0]["kidneys"].length;
    let NumberOfHealtyKidenys=0;
    for(let i=0;i<users[0]["kidneys"].length;i++){
        if((users[0]["kidneys"])[i]["healthy"])
        NumberOfHealtyKidenys+=1; 
    }
    res.send("The number of kidneys is :"+NumberOfKidenys+" The number of healthy kidneys is"+NumberOfHealtyKidenys);
})

//If we need data we send it in the body
app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    let NumberOfKidenys=users[0]["kidneys"].length;
    let NumberOfHealtyKidenys=0;
    for(let i=0;i<users[0]["kidneys"].length;i++){
        if((users[0]["kidneys"])[i]["healthy"])
        NumberOfHealtyKidenys+=1; 
    }
    res.send("The number of kidneys is :"+NumberOfKidenys+" The number of healthy kidneys is"+NumberOfHealtyKidenys);
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0]["kidneys"].length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.send("DONE!!");
})

app.delete("/",(req,res)=>{
    let array=[]
    let arr=users[0]["kidneys"];
    for(let i=0;i<users[0]["kidneys"].length;i++){
        if(arr[i].healthy){
            array.push(arr[i])
        }
    }
    if(array.length){
    users[0]["kidneys"]=array;
    res.send("DONE!!");
    }
    else
    {
        res.status(400).send("NO unhealthy kidneys!");
    }
})

app.call()

app.listen(3000, () => {
    console.log('Example app listening on port')
  })