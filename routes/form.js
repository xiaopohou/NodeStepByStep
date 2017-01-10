var express = require('express');
var router = express.Router();

router.get('/',function(req, res) {
    res.render('form',{title:"提交表单"});
   // res.send('xxxxxxxxxxxxxx');
});

router.get('/submit',function(req,res){
    // var 
    // name=req.query.txtUserName;
    // pass=req.query.txtUserPwd;
    //console.log(name+pass);
    res.send('ok');

});
module.exports = router;