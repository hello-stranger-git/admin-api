const { WorkExperience } = require('../../model/WorkExperience');
module.exports = async (req,res)=>{
    //正则表达式模糊查询
    var qs=new RegExp(req.query.companyname);
    req.query.companyname=qs;
    let WorkExperiences = await WorkExperience.find().where(req.query);
    res.send(WorkExperiences)
}