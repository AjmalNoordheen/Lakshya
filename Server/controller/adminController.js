const eventModel = require("../models/eventModel");

// ========= Add an EVENT ===========

const addEvents = async (req, res) => {
  try {
    const data = req.body;
    await eventModel
      .create(data)
      .then(res.status(200).json({message:'success'}))
      .catch(res.status(500));
  } catch (error) {
    console.log(error);
  }
};

// ======== Delete Selected Event ============

const deleteEvent =async (req,res)=>{
    try {
        const {id} = req.query
        const result = await eventModel.deleteOne({_id:id})
        if(result){
            res.json({result:'success'})
        }else{
            res.json({result:'failed'})
        }
    } catch (error) {
        res.status(500)
    }
}
module.exports = { addEvents,deleteEvent};
