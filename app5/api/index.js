import dotenv from 'dotenv'
dotenv.config()

const axios=require('axios')

const URL=axios.get(process.env.URL)
               
export default URL