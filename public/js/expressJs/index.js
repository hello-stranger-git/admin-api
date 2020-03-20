const express=require('express');
const app=express();
const path=require('path')
const admin=express.Router();

admin.get('/index',(req,res)=>{
    // res.send('主界面路由');
    console.log('主界面路由')
    res.send(req.query);
});
module.exports=admin;