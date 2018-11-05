const koa = require('koa')
const koaSession = require('koa-session')
const koaBody = require('koa-bodyparser');
const cors = require('@koa/cors');
const http = require('http')
const router = require('./router')
const app = new koa();

app.keys = ['starVote']
app.use(koaSession({
  key: 'starVoteSession',
  maxAge: 86400000,
  path: '/',
  domain: 'localhost',
  httpOnly: true
}, app))

app.use(cors());
app.use(koaBody());
router(app)
http.createServer(app.callback()).listen(8000)