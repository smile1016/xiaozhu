const db = require('../model/db')

class Carousel {

  async list(ctx) {
    let result = await db('select * from carousel');
    ctx.body = result;
  }

}


module.exports = new Carousel();