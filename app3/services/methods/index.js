async function getMessage(req, res, responseData){
    try{
        let response=await responseData
        return res.status(200).json(response.data)
    }catch(e){
        return res.status(500).send(`I'm Sorry, Ocurred an error with your request: ${e}` )
    }
}

module.exports={ getMessage }
