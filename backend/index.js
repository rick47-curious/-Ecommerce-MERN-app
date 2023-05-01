const express = require('express');
const cookieParser = require('cookie-parser')
const Books = require('./routes/Books')
const authorization = require('./routes/Authorization')
const orderHistory = require('./routes/Order')
const port = process.env.PORT || 3001;
const app = express();

//Routes
app.use("/books",Books);
app.use("/auth",authorization)
app.use('/order',orderHistory)

//Middlewares
app.use(express.json());
app.use(cookieParser());




app.listen(port,()=>{
    console.log(`The app is running at port ${port}`)
})

