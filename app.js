const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Router
const postRouter = require('./routes/posts');
app.use('/posts',postRouter);



app.get('/',(req,res)=>{
    res.send("Welcome to real world");
})

//connect to mongodb
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },()=>{
    console.log('Connect to DB')
    })

const port = 3000;
app.listen(port);