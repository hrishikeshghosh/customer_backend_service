var express= require('express')
var config =require('./config')
const app=express()
const PORT= config.PORT

const authentication=require('./routers/authentication')

app.use(express.json()) // body parser

//route declarations
app.use('/auth', authentication)


app.listen(PORT, ()=>{
    console.log(`Customer is live... ${PORT}`)
})