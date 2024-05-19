

async function allowAccess(req,res){
try {
        res.status(200).json({msg:`Welcome back to the application... ${req.currentUser.data}`})
} catch (error) {
    console.log(error)
}
}

module.exports=allowAccess

