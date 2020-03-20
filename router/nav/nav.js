const { Nav } = require('../../model/nav')
module.exports = async (req,res)=>{
    let navs=await Nav.find({});
    res.send(navs);
    // console.log(navs);
}