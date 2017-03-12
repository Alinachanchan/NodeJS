var express = require('express');
var router = express.Router();
var UserModel = require('../models/users');
var checkLogin = require('../middlewares/check').checkLogin;

router.get('/users',function(req,res,next){

 UserModel.findAllUsers()
          .then(function(result){
            res.render('manageUsers',{users:result});
      });
});

router.get('/users/:id',function(req,res,next){
     var userId = req.params.id;
     UserModel.delUserByName(userId)
              .then(function(result){
                console.log("-----------------")
                req.flash('success', '成功删除一个用户');
                res.redirect('back');
              })
})
module.exports = router;
