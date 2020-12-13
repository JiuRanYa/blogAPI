var express = require('express');
var router = express.Router();
let blogItem_mod = require('../models/blogItemCounter')


const webPostId = '623wat7'


/* GET home page. */
router.post('/', function(req, res, next) {
  const {postId} = req.query
  blogItem_mod.findOne({postId : postId}, (err, blogItem_result) => {
   if(err){
     throw err;
     console.log(err);
   }
   //新建的博客
   if(!blogItem_result){
    let blogItem = new blogItem_mod({
      postId: postId,
      count: 0
    })
    blogItem.save((err, doc)=>{
      if(err) throw err;
      res.send(doc)
    })
   }else{
    let number = blogItem_result.count++
    blogItem_mod.findOneAndUpdate({postId: postId},{count: blogItem_result.count++},(err, doc)=>{
      if(err){
        console.log(err);
      }else{
        res.send(doc);
      }
    })
   }
 })
});

module.exports = router;
