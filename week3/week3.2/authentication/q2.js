//3 requests
// /signup {username,password,firstName} now put this in data base provided it doesnt already exiasts
// /signin
// same return all the users with right authorization 
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
//This library provides some extra validation on top as MongoDB is schemaless
//allows validation on the client side you could still go to the database anad put anything there


const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://anirudhardesai:vhZ38ZpPkpdE09pQ@cluster0.zqbdupz.mongodb.net/user_app",
);

const User = mongoose.model("User",{
  username: String,
  passwordl: String,
  fname: String,
});


const app = express();
app.use(express.json());

async function createNewUser(username,passwordl,fname){ 
  const newuser= await User.create({username:username,passwordl:passwordl,fname:fname,});
 newuser.save();
  return;
}


app.post("/signin",async function (req, res) {
  const username = req.body.username;
  const passwordl = req.body.passwordl;
  const fname=req.body.fname;

  const queryData=await User.find({username:username,passwordl:passwordl,fname:fname})

  console.log("CHECK COMPLETED:"+typeof(queryData)+JSON.stringify(queryData));


    if(JSON.stringify(queryData)!='[]')
    {
      console.log('User found:'+queryData);
    } 
    else 
    {
      createNewUser(username,passwordl,fname);
      var token = jwt.sign({ username: username }, jwtPassword);
      return res.json({
        msg:"New entry made",
        token,
      })
    }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});


app.get("/users", async function (req, res) {
  const token = req.headers.authorization;

    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const passwordl=decoded.passwordl;
    const fname=decoded.fname;
    // return a list of users other than this username from the database
    let AllData=await User.find({});
    console.log(decoded);
    console.log("****");
    console.log(AllData);
    let SendData=AllData.filter((n)=>{
      if(n.username==decoded.username)
        return false
      return true
    })
    res.json(SendData);
});

app.listen(3000,()=>{console.log("I am Listeing")});
