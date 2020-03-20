// 链接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/administer',{useUnifiedTopology: true})
    .then(()=>{
        console.log('数据库连接成功');
    })
    .catch(()=>{
        console.log('数据库连接失败');
    })