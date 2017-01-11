var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
    try {
        if (req.session.isLogin) {
            console.log("已经登录" + req.session.isLogin);
            res.locals.isLogin = "已登录";
        }
    } catch (error) {
         
            res.send(error);
    }

    res.render('form', { title: "登录" });
    // res.send('xxxxxxxxxxxxxx');
});

router.post('/', function (req, res) {
     
    var
        name = req.query.txtUserName;
    pass = req.query.txtUserPwd;
    pass2 = req.param("txtUserPwd");
    pass3 = req.body.txtUserPwd;
    console.log("name:" + name + " pass:" + pass + " pass2:" + pass2 + " pass3:" + pass3);

    req.session.isLogin="success";
    res.locals.isLogin=req.session.isLogin;
    res.render('form', { title: "登录" });

});

router.get('/loginout',function(req,res){

    if(req.session.isLogin){
           console.log("已经登录" + req.session.isLogin);
        req.session.destroy();
    }
});
module.exports = router;