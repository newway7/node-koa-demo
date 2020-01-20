

const router = require('koa-router')()

// router.get('/index', async (ctx, next) => {
//   await ctx.render('index');
// });
router.get('/index', async(ctx, next) => {
  await ctx.render("index")
});

module.exports = router

