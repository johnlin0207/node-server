var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.all('*',function (req, res, next) {
    console.log(JSON.stringify(req.cookies));
    next();
});
//检测cookie是否有效
// router.use(function (req, res, next) {
//     console.log(req.cookies.loginStatus)
//     //cookie过期，重新设置
//     if (req.cookies.loginStatus !== 1) {
//         var now = new Date().getTime();
//         var duration = 3 * 24 * 3600 * 1000;
//         var expireDate = new Date(now + duration).toGMTString();
//
//         // res.writeHead(200, {
//         //     'Set-Cookie': "userId=828; userName=" + req.body.username + "; expire=" + expireDate,
//         //     'Content-Type': 'text/html'
//         // });
//
//         res.cookie('status', 1, {maxAge: 1000 * 1, httpOnly: true});
//         res.cookie('username', req.body.username, {maxAge: 1 * 1000 * 30, httpOnly: true});
//
//         console.log('')
//         next();
//     }
// });

app.use(express.static(path.join(__dirname, 'public')));
var proxy = require('http-proxy-middleware');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

// 根路由/路由会默认寻找静态资源目录下的index.html文件并返回，可以不用设置下面这句
app.use('/', indexRouter);
app.use('/usermanage', usersRouter);

// 匹配路由时星号代表以上还没有路由匹配到时会匹配这里,比如/dev这个请求以上没有匹配到的会经由这里转发
// 设置代理
// app.use('*', proxy({
//     target: 'http://125.35.5.200:8080',
//     changeOrigin: true
// }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
