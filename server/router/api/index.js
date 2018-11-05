const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
})

router.get('/cc', async (ctx, next) => {
  console.log(2222)
  ctx.data = {
    record: 4
  }

  next()
});

module.exports = router