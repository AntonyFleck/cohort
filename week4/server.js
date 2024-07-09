const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");


mongoose.connect(
    "mongodb+srv://anirudhardesai:vhZ38ZpPkpdE09pQ@cluster0.zqbdupz.mongodb.net/user_app",
);
  
const todos = mongoose.model("todos",{
    title: String,
    description: String,
    id:Number
});

// async function createNewUser(title,description,id){ 
//     const newuser= await todos.create({title:title,description:description,id:id});
//    newuser.save();
//     return;
// }

app.get("/getSTATE",async (req,res)=>{
    let AllData=await todos.find();
    // console.log(AllData)
    res.json(AllData);
})

app.post("/getSTATE2", async(req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const id=req.body.id;
    console.log(req.body)
    const newuser= await todos.create({title:title,description:description,id:id});
    newuser.save();
    return res.send("DONE");
})

app.listen(3000,()=>{console.log("The server is listening ")});