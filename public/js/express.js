const amdin=require('./expressJS/index')
const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(amdin)
// app.use(bodyParser.urlencoded({extended:false})

app.listen(3000);
console.log('服务器启动成功')