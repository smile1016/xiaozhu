const Router = require('koa-router')

var roomshowController = require('../controller/RoomShow')

var router = new Router()

router.get('/roomlist',roomshowController.list)

module.exports = router;