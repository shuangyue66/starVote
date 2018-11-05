const apiRouter = require('./api')
const Router = require('koa-router')
const router = new Router()

function routerFn(app) {
  app.use(apiRouter.routes());
  app.use(apiRouter.allowedMethods());

  router.get('*', async ctx => {
    console.log(3433)
    ctx.body = {
      record: 4
    };
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
}

module.exports = routerFn