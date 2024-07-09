const express=require('express')
const jwt = require("jsonwebtoken");
const userrouter=express.Router();
const z=require('zod')
const { User,Account } =require( '../db');
const { JWT_SECRET } =require( '../config');
const {authMiddleware} =require( '../middleware');
userrouter.use(express.json())



const mySchema=z.object({
    username: z.string().email(),
	firstName: z.string(),
	lastName: z.string(),
	password: z.string()
})

userrouter.post('/signup',async (req,res)=>{
    const parsedData=mySchema.safeParse(req.body)

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const existingUser=await User.findOne({
        username:req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    await Account.create({
        userId:user._id,
        balance: 1 + Math.random() * 10000
    })

    const userId=user._id;
    const token=jwt.sign({userId},JWT_SECRET);

    res.json({
        message:'User succesfully created',
        token
    })
})

const signinBody=z.object({
    username:z.string().email(),
    password:z.string()
})

userrouter.post('/signin',async (req,res)=>{
    
    const {success}=signinBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Error while logging in"
        })
    }

    const existingUser=await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(existingUser)
    {
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })

})


const updaeBody=z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

userrouter.put('/',authMiddleware,async(req,res)=>{

        const {success}=updaeBody.safeParse(req.body);
        if(!success){
            res.status(411).json({
                message: "Error while updating information"
            })
        }
        await User.updateOne({
            _id:req.userId
        },req.body)
    
        res.json({
            message: "Updated successfully"
        })


})

userrouter.get("/bulk",authMiddleware, async (req, res) => {

        const filter = req.query.filter || undefined;
        const users = await User.find({
           // $or: [
           //{
                firstName: {
                    "$regex":'^'+`${filter}`
                }
           // },
            //  {
            //     lastName: {
            //         "$regex": filter
            //     }
            // }
        //]
        })
    
        res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
        }))
    })
})



module.exports={userrouter}