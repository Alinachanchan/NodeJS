module.exports = {
  port: 8080,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 1000*60
  },
  mongodb: 'mongodb://localhost:27017/myblog'
};
