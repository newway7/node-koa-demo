/*
 * @Author: huyh
 * @Github: 
 * @Date: 2019-05-10 11:36:28
 * @LastEditors: huyh
 * @LastEditTime: 2019-05-30 14:54:19
 * @description: main方法  配置路由 跨域 异常处理 koa插件导入   
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const config = require('./config/default.js')

const users = require('./routes/user_router')



// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(users.routes(), users.allowedMethods())




// 配置跨域
app.use(async (ctx, next) => {
   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
   ctx.set('Access-Control-Allow-Origin', 'http://localhost:9000');
   ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
   ctx.set('Access-Control-Allow-Credentials', true);
   ctx.set('Access-Control-Max-Age', 3600 * 24);
   await next();
 });


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


app.listen(config.port);


module.exports = app
