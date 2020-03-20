const mongoose = require('mongoose');
var UUID = require('uuid')
const workExperienceSchema = new mongoose.Schema({
    uuid:{
        type:String,
        require:true
    },
    companyname:{
        type:String,
        require:true,
    },
    position:{
        type:String,
        require:true,
    },
    starttime:{
        type:Date,
        require:true,
    },
    endtime:{
        type:Date,
        require:true
    },
    reason:{
        type:String,
    }
})


const WorkExperience =  mongoose.model('WorkExperience',workExperienceSchema)

// WorkExperience.create({
//     uuid:UUID.v4(),
//     companyname:'广州嘉崎科技有限公司',
//     position:'前端开发工程师',
//     starttime:Date(),
//     endtime:Date(),
//     reason:'上班地址需要两个多小时才能到达'
// }).then(()=>{
//     console.log('添加工作经历成功')
// }).catch(error=>{
//     console.log(error)
// })


module.exports = {
    WorkExperience
}