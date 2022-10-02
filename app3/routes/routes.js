const express=require('express')
const server=express.Router()

const service=require('../services')
const axios=require('../api')

server.route('/').get((req, res)=>{
    return service.getMessage(req,res,axios)
})

module.exports=server 