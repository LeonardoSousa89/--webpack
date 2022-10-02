import express from 'express'
const server=express.Router()

import service from '../services'
import axios from '../api'

server.route('/').get((req, res)=>{
    service.getMessage(req, res, axios)
})

export default server 