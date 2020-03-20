const { WorkExperience } = require('../../model/WorkExperience');
module.exports = async (req,res)=>{
    let WorkExperiences = await WorkExperience.find();
    res.send(WorkExperiences)
}