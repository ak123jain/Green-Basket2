import express from 'express'

const app = express()

app.get('/',()=>{
    res.send("server is redy")
})


const port = process.env.PORT || 3000

app.listen(port , ()=>{
    console.log(`server is listenning at port http:localhost:${port}`);
    
})




