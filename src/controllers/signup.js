const {PrismaClient}= require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma=new PrismaClient()

 async function signup(req,res){
    if(req.method !== "POST"){
        return res.status(500).json({msg:"Invalid method"})
    }
    try {
        const {firstName, lastName, phone, email, password}=req.body
        const isUserExist= await prisma.user.findFirst({
            where:{
                email
            }
        })
        if(isUserExist){
            return res.status(200).json({msg:"User already exists!"})
        }else{
            const hashedPassword= await bcrypt.hash(password,10)

            

            const db_response=await prisma.user.create({
            data:{
                firstName,
                lastName,
                phone,
                email,
                password:hashedPassword

            }
        })

        return res.status(200).json({msg:"User created successfully!"})
        }

        
        
    } catch (error) {
        console.log(error)
       return res.status(500).json({msg:error})
       
    }
}

module.exports=signup