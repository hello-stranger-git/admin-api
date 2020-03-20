//随机生成uuid
var UUID = require('uuid');
const { WorkExperience } = require('../../model/WorkExperience');
module.exports = async (req,res) =>{
    req.body.uuid = UUID.v4();
    let WorkExperiences = await WorkExperience.create(req.body);
    res.send(WorkExperiences)
}