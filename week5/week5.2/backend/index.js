const express=require("express");
const cors=require("cors")
const { createTodo,updateTodo } =require("./types");
const { todo }=require("./db");

const app=express();
app.use(express.json())
app.use(cors())
app.post("/todo",async (req,res)=>{
    const createPayload=req.body;
    console.log(createPayload)
    const parsePayload=createTodo.safeParse(createPayload);
    console.log(parsePayload)
    if(!parsePayload.success){
        return res.json({msg:"Wrong inputs"})
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"TODO created"
    })
})

app.get("/todos",async(req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed",async(req,res)=>{
     const updatePayload=req.body;
     const parsePayload=updateTodo.safeParse(updatePayload);
     if(!parsePayload.success){
        return res.status(411).json({
            updatePayload
        })
    }
    await todo.updateMany({
        _id:req.body.id,
},{
    completed:true
})
res.json({
    msg:"Update completed"
})
})

app.listen(3002,()=>{
    console.log("The server is on")
})