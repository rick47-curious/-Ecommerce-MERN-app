const express = require('express');
const Books = require('./routes/Books')
const port = process.env.PORT || 3001;
const app = express();

//Routes
app.use("/books",Books);

//Middlewares
app.use(express.json());




app.listen(port,()=>{
    console.log(`The app is running at port ${port}`)
})

