const { WorkExperience } = require('../../model/WorkExperience');
module.exports = async (req,res) =>{
    let WorkExperiences = await WorkExperience.findOneAndDelete({uuid:req.body.uuid});
    res.send(WorkExperiences)
}