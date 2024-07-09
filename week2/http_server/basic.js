//express is not an node default library
//i.e is does not come bundeled with node
// npm install express
//Multiple Backends run on multiple ports
//?a=11&b=12 these are query parameters
const express= require("express");
const bodyParser = require("body-parser");
//creating a clinic 
const app=express();

const port = 3000
let sum=0;
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );

//This is a get route handler
//request and response
//app.get(route,CallBackFunction)
app.get('/', (req, res) => {
// res.json({
//     "msg":"namaste"
// }) 
setTimeout(function(){
    res.send("done")
},5000);
})
app.post('/', (req, res) => {
    console.log(req.headers["authorization"]);
    console.log(req.body);
    res.json({
        "msg":"namaste"
    })
})

//saying that the server is started at thos port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})