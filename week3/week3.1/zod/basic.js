//It is an input validation library
const express=require("express");
const zod=require("zod");
const app=express();

app.use(express.json());

const schema=zod.object({
    "email":zod.string().email(),
    "password":zod.string().min(8),
    "country":zod.literal("IN").or(zod.literal("US"))

});

app.use((req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    const country=req.body.country;
    // const input={email,password};
    //{email,password,country}
    console.log(req);
    const response=schema.safeParse(req.body);
    if(!response.success){
        res.status(421).json({"msg":"fuck off"})
    }
    else{
        next();
    }
});

app.post("/",function(req,res){
        res.send("Correct email")   
});

app.listen(3000,()=>{console.log("listening")});
