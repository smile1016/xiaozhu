const Router = require('koa-router');

var testController = require('../controller/test');

var router = new Router();


router.get('/list', testController.list)

router.post('/add', testController.add)

router.patch('/update', testController.update)

router.delete('/remove', testController.remove)

module.exports = router;

