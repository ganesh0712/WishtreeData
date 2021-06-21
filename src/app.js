const express = require('express');
const app = express();
require("./database/connection");
const Student = require('./models/students')
const port =process.env.port || 8000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello welcome!!")
})

app.post("/student",(req,res)=>{
console.log(req.body)
const user = new Student(req.body);
user.save().then(()=>{
    res.send(user)
}).catch((e)=>{
        res.send(e);
})
})

app.listen(port,()=>{
    console.log(`server started at port number ${port}`)
})