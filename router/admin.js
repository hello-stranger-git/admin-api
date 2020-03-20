const express=require('express');
const admin=express.Router();

// admin.get('/',(req,res)=>{
//     res.render('admin/login');
// })

//登陆功能
admin.post('/login',require('./admin/login'));

//查询全部导航
admin.get('/nav',require('./nav/nav'));

//查询工作经历
admin.get('/WorkExperience',require('./experience/searchWorkExperience'));
//条件查找
admin.get('/searchWorkExperience',require('./experience/searchTjWorkExperience'));
//添加工作经历
admin.post('/WorkExperience',require('./experience/addWorkExperience'));
//删除工作经历
admin.post('/delWorkExperience',require('./experience/deleteWorkExperience'));

module.exports = admin;