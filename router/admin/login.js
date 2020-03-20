const { User }= require('../../model/user')
module.exports = async (req,res)=>{
    
    // 查询数据库用户表
    let user=await User.findOne({
        username:req.body.username,
        password:req.body.password,
    })
    res.send(user);
}