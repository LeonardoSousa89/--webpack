require('dotenv').config()
const axios=require('axios')

const URL=axios.get(process.env.URL)
               
module.exports=URL