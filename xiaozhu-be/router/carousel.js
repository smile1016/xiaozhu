const Router = require('koa-router');

var carouselController = require('../controller/Carousel');

var router = new Router();


router.get('/list', carouselController.list)

module.exports = router;

