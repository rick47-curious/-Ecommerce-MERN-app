const express = require('express');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const orderHistoryPageController = require('../controller/OrderHistoryPageController')
let app = express.Router();

app.use(cookieParser())

app.get('/getOrderHistory',async (req,res)=>{
    let payload = jwt.decode(req.cookies.accessToken,{json:true});  
    let result = await orderHistoryPageController.getOrderHistory(payload);
    if (result.length >0)
        res.status(200).json(result);
    else
        res.status(500).json({
            "Message":"Something went wrong, please try again later"
        })
})
app.post('/setOrder',async (req,res)=>{
    let payload = jwt.decode(req.cookies.accessToken,{json:true});  
   let result =  await orderHistoryPageController.placeOrder(payload);
   if (result.acknowledged){
    res.status(201).json({
        "Message":"Order placed successfully"
    })
   }else {
    res.status(500).json({
        "Message": "Something went wrong, please try again later"
    })
   }
    
})

module.exports = app;