const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
}) 
const User = mongoose.model('User',userSchema);

// User.create({
//     username:'admin',
//     password:'admin',
// }).then(()=>{
//     console.log('创建用户成功');
// }).catch(()=>{
//     console.log('用户创建失败');
// })




module.exports = {
    User
}