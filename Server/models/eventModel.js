const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({
    heading:{
        type:String,
        require
    },
    description:{
        type:String,
        require
    },
    image:{
        type:String,
        require
    }

})

const eventModel=mongoose.model('event',eventSchema)
module.exports=eventModel