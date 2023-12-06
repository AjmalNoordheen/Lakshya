const eventModel = require("../models/eventModel");

 const listEvents =async (req,res)=>{
    try {
      const eventLists = await eventModel.find()
      if(eventLists){
        res.json({eventLists:eventLists,result:true})
      }else{
        res.json({result:false})
      }
    } catch (error) {
        res.status(500)
    }
}

module.exports = {listEvents}