const { json } = require('body-parser');
const express=require('express');
const app=express();
app.use(express.urlencoded({extended: true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname + '/index.html'); 
})
app.post("/",function(req,res)
{
    var num1=req.body.num1;
    var n1=Number(num1);
    var num2=req.body.num2;
    var n2=Number(num2)
    var result=n1+n2;
    var ans=toString(result)
    res.send('this is your ans '+result);
})
app.listen(3000,function()
{
    console.log("server started on port 3000");
})