const server=require('../routes/routes')

describe('Should be got data from API',()=>{
    it('Should be got a message', ()=>{
        try{
            expect(server).not.toBeNull()
        }catch(e){
            throw `I'm Sorry, Ocurred an error with your request: ${e}`
        }

    })
})

describe('Should be got a message',()=>{
    it('Should be got a message different of undefined', ()=>{
        try{
            expect(server).not.toBe(undefined)
        }catch(e){
            throw `I'm Sorry, Ocurred an error with your request: ${e}`
        }

    })
})