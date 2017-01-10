var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user',{
    title:"用户列表",
    users:[{name:"laozhao1",age:29},{name:"laozhao2",age:29}]
  });
});
router.get('/Add', function(req, res, next) {
  res.send('add');
});
module.exports = router;
