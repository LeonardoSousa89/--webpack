require('dotenv').config()

const port=8081
const server=require('./routes/routes')
const express=require('express')
const app=express()

app.use('/', server)

app.listen(process.env.PORT || port)

