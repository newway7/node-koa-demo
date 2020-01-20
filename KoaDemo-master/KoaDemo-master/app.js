//app.js

const Koa = require('koa');
const static = require('koa-static'); //引入css等静态资源(1)
const main = static(__dirname + '/public'); //将public目录设置为静态资源目录(2)
const views = require('koa-views'); //推荐使用koa-views中间件来渲染页面
const app = new Koa();

// ctx是koa提供的Context对象
// Context.response.body  =>  Content.body

// app.use(async ctx => {
//     ctx.body = 'Wise Wrong';
// });

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/index') {
//         ctx.type = 'text/html';
//         ctx.body = fs.createReadStream('./views/index.html');
//     } else {
//         await next();
//     }
// })
app.use(views(__dirname + '/views'));//将views目录设定为模板目录
const index = require('./routes/index')
app.use(index.routes(), index.allowedMethods()) //allowedMethods 用于校验请求的方法，eg:用post请求访问get接口，就会直接返回失败
app.use(main); //(3)
//(1)(2)(3)    可以优化为:app.use(require('koa-static')(__dirname + '/public'));

app.listen(3000);