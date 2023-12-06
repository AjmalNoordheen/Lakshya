const express=require('express')
const router=express.Router()

const adminController=require('../controller/adminController')

router.post('/addEvents',adminController.addEvents)
router.delete('/deleteEvent',adminController.deleteEvent)

module.exports=router