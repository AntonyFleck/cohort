const express=require('express')
const mongoose=require('mongoose');
const { Account } = require('../db')
const {authMiddleware} =require( '../middleware');


const accountRouter=express.Router()

accountRouter.get('/balance',authMiddleware,async (req,res)=>{
    const account=await Account.findOne({
        userId:req.userId
    })
    res.json({
        balance: account.balance
    })
})

accountRouter.post('/transfer',authMiddleware,async (req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();

    const {amount,to}=req.body;
    const userFound=await Account.findOne({
        userId:to
    }).session(session)
    if(!userFound){
        res.status(400).json({
            message:'Invaild Account'
        })
        await session.commitTransaction();
        return
    }

    const fromAccount=await Account.findOne({
        userId:req.userId
    }).session(session)

    if(fromAccount.balance<amount){
        res.status(400).json({
            message: "Insufficient balance"
        })
        await session.commitTransaction();
        return
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session)
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    })
})

module.exports=accountRouter
