const express=require('express')
const userController=require('../controller/userController')
const router=express.Router()


router.get('/listEvents',userController.listEvents)

module.exports=router