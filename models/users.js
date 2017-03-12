var User = require('../lib/mongo').User;
var PostModel = require('./posts');
var CommentModel = require('./comments');

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  },
  // 通过用户名获取用户信息
 getUserByName: function getUserByName(name) {
   return User
     .findOne({ name: name })
     .addCreatedAt()
     .exec();
 },
 //根据用户ID删除一个用户
 delUserByName: function(id){
   return User.remove({_id:id})
            .exec()
            .then(function(res){
              if (res.result.ok && res.result.n > 0) {
                CommentModel.delCommentsByUser(id);
                return PostModel.delPostsByUserId(id);             //同时删除该用户的所有文章和所有评论
              }
            })
 },
 //查找所有用户
 findAllUsers:function(){
   return User.find()
              .exec();
 }
};
