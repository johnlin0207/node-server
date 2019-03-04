var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.send('index.html')
});

router.post('/login', function (req, res, next) {
    console.log(JSON.stringify(req.cookies))

    //数据库查询用户
    if (true) {
        var now = new Date().getTime();
        var duration = 3 * 24 * 3600 * 1000;
        var expireDate = new Date(now + duration).toGMTString();

        // res.writeHead(200, {
        //     'Set-Cookie': "userId=828; userName=" + req.body.username + "; expire=" + expireDate,
        //     'Content-Type': 'text/html'
        // });

        res.cookie('loginStatus', 1, {maxAge: 1000 * 1, httpOnly: true});
        res.cookie('username', req.body.username, {maxAge: 1 * 1000 * 30, httpOnly: true});
        res.send({status: 1})
    } else {
        //用户名或密码错误
        res.send({status: 2})
    }

});

router.get('/homeData', function (req, res, next) {

})

module.exports = router;
