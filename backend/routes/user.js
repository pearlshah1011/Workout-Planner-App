const express=require('express')
//controller function

const {signupUser,loginUser}=require('../controllers/usercontroller')
const router=express.Router()

//login routes
router.post('/login',loginUser)




//signup routes

router.post('/signup',signupUser)









module.exports=router