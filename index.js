const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const allRouter = require('./routes/allRoutes')
dotenv.config()


const app = express()


const db = module.exports =()=>{
    try{
        mongoose.connect(process.env.DBURI, { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true,    useUnifiedTopology: true })
            console.log("MongoDB Connection is Successful")
        } catch(error){
            console.log(error);
            console.log("MongoDB Connection is failed")
        }
    }
db();
 


app.use('/', (req, res, next) => {
    console.log('A new request received at ' + new Date(Date.now()));
    next();
})


app.use('/',allRouter)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
