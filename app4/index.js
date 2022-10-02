import server from './routes/routes'
import express from 'express'
import dotenv from 'dotenv'

const port=8081
const app=express()

dotenv.config()

app.use('/', server)

app.listen(process.env.PORT || port)

