const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser');

const carouselRouter = require('./router/carousel')
const roomlistRouter = require('./router/roomshow')

var router = new Router();

var app = new Koa();

app.use(bodyParser())

router.use('/carousel', carouselRouter.routes())
router.use('/roomshow',roomlistRouter.routes())

app.use(router.routes());

app.listen(3000, () => {
  console.log('locahost 3000...')
})