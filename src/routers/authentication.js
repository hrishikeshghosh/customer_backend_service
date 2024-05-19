var express= require('express')
var signup=require('../controllers/signup')
var login = require('../controllers/login')
var auth_middlware= require('../middleware/auth')
const allowAccess = require('../controllers/allow-access')

const router=express.Router()

router.post('/signup',signup)
router.post('/login', login)
router.get('/is-access-allowed', auth_middlware, allowAccess)

module.exports=router