const collegeModel = require("../models/collegeModel.js")



const createCollege = async function (req,res){
    try{
        let college = req.body
        let newCollege = await collegeModel.create(college)
        res.status(201).send({status : true, msg : "College created successfully!", newCollege})
    }catch(error){
        res.status(500).send({msg : message.error})
    }
}