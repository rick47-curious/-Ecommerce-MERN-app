const express = require('express');
const homePageController = require('../controller/HomePageController')
let app = express.Router();

app.use(express.json());

app.get('/GetAllBooks',async (req,res)=>{
    res.status(200).json(await homePageController.getAllBooks(req.query.category));
})

app.get('/search',async (req,res)=>{
    res.status(200).json(await homePageController.searchResult(req.query.q));
})


module.exports = app;