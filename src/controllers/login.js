var {PrismaClient}=require('@prisma/client')
var bcrypt= require('bcrypt')
const TokenCreator = require('../utils/TokenCreator')

const prisma=new PrismaClient()

async function login(req,res){
    if(req.method !== "POST"){
       return res.status(500).json({msg:"Invalid method"})
    }

    try {
        const {email, password}=req.body
        const user= await prisma.user.findFirst({
            where:{
                email:email,
            }
        })
        
        if(!user){
            return res.status(404).json({msg:"No User Found!"})
        }

        const isPasswordValid= await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            return res.status(500).json({msg:"Password doesn't match!"})
        }
        
        const token= await TokenCreator(user.email)

        return res.status(200).json({msg:"Welcome to our application!", token})


    } catch (error) {
        console.log(error)
        return res.status(200).json({error})
    }
}

module.exports=login