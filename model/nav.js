//随机生成uuid
var UUID = require('uuid');

const mongoose = require('mongoose');
const navSchema = new mongoose.Schema({
    uuid:{
        type:String,
        require:true,   
    },
    navname:{
        type:String,
        require:true,
    },
    router:{
        type:String,
    },
    childernnav:{
        type:Array,
        require:true,
    }
})
const Nav = mongoose.model('Nav',navSchema);

// Nav.create({
//     uuid:UUID.v4(),
//     navname:'系统设置',
//     childernnav:[
//         {uuid:UUID.v4(),navname:'导航栏设置',router:'/navSystem'},
//     ],
//     router:''
//     },
//     ).then(()=>{
//     console.log('添加导航数据成功')
//     }).catch((error)=>{
//         console.log(error)
//     })
module.exports={
    Nav
}