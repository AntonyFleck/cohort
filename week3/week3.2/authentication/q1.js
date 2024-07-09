//Two end points POST and GET
//POST any time a req comes with body{username:string password:string}
//return json web token with user name encrypted
//GET expects an authorization header and return an array of all users if is signed in

const express = require("express");
const jwt = require("jsonwebtoken");
//like V8 pr spider monkey are implementation of the ecma script standars
//jsonwebtoken implements jwt standard
const jwtPassword = "123456";
//this is usually stored in some secret manager

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];


function userExists(username, password) {
  //try to use find function in js  
  //find func is used to find the first element in an array that satisfies a given condition

  // let i;
  //   let exists=false;
  // for(i=0;i<ALL_USERS.length;i++){
  //   if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
  //       exists=true;
  //   }
  // }
  // return exists;

  let exsist=ALL_USERS.find((n)=>{
    return n.username==username && n.password==password
  })

  if(exsist)
    return true
  return false
}

app.use(express.json());
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username },jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    // return a list of users other than this username

    res.json({
        users :ALL_USERS.filter((n)=>{
          if(n.username==decoded.username)
            return false;
          return true;
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,()=>{console.log('listeining');})