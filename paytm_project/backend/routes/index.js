const express=require("express")
const accountRouter=require("./account")
const {userrouter}=require('./user')
const mainrouter=express.Router()
mainrouter.use('/user',userrouter)
mainrouter.use('/account',accountRouter)

module.exports=mainrouter

