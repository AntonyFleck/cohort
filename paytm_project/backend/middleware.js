const express=require('express')
const  jwt=require('jsonwebtoken')
const { JWT_SECRET }= require('./config')
const { useNavigate } = require('react-router-dom')

const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token || token.split(' ')[0]!='Bearer'){
        return res.status(403).json({
            message:'wrong authorization token'
        })
    }
    try{
        const decoded=jwt.verify(token.split(' ')[1],JWT_SECRET)
        req.userId=decoded.userId;
        next()
    }
    catch(err){
        return res.status(403).json({
            message:'wrong authorization token'
        })
    }
}


module.exports ={
    authMiddleware,
}