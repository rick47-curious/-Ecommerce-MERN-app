const express = require('express');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const loginPageController = require('../controller/LoginPageController')
let app = express.Router();

app.use(express.json());
app.use(cookieParser())
app.post('/login',async (req,res)=>{
    const response = await loginPageController.loginUser(req.body);
    if (response){
        if (response.password === req.body.loginPassword){
            let token = jwt.sign({"registeredUser":response.email},process.env.JWT_SECRET_KEY)
            res.cookie("accessToken",token,{httpOnly:false,path:"/"}).status(200).json({"Message":"LoginSuccessful"});
        }else {
            res.status(401).json({
                "Message": "Invalid Password or email provided"
            })
        }
    }else {
        res.status(400).json({
            "Message": "Invalid Credentials provided"
        })
    }
})

app.post('/register',async (req,res)=>{
    let output = await loginPageController.registerUser(req.body);
    if (output.acknowledged){
        let token = jwt.sign({"registeredUser":req.body.email},process.env.JWT_SECRET_KEY);
        res.cookie("accessToken",token,{httpOnly:false,path:"/"}).status(200).json({
            "Message":"Registration Successfull"
        });
    }else {
        res.status(500).json({
            "Message":"Something went wrong while signing up"
        })
    }
})

app.post('/logout',(req,res)=>{
    res.clearCookie("accessToken",{httpOnly:true}).status(200).json({
        "Message":"Logout Successfull"
    })
})
module.exports = app;