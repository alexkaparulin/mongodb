const express = require('express');
const mongoose = require('mongoose')
const app = express();
// const router = express.Router();


const user_router = require('./routes/user.route')

app.use('/api/user', user_router)


app.get('/',(req,res,next)=>{
    res.send('server is online')
    next();
})

const server = app.listen(3000,()=>{
    console.log('Server is on port: 3000');
});