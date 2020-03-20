const express = require('express');
const path=require('path');
const app = express();
const bodyParser=require('body-parser');

const UUID = require('uuid');
// const cors=require('cors')

// 引入数据库连接
require('./model/connect');
// 创建一个用户
require('./model/nav')


// 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});


// 接受post参数
app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','art');
// app.engine('art',require('express-art-template'));


const admin = require('./router/admin');


app.use('/admin',admin);

app.listen(3000);
console.log("administres网站服务器启动成功")