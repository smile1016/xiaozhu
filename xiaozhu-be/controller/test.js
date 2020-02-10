const db = require('../model/db')

class Test {

  async add(ctx) {
    let params = ctx.request.body;

    // let params = {
    //   name: '刘慧慧',
    //   address: 'beijing',
    //   age: 20
    // }

    let result = await db('insert into test set ? ', params);
    ctx.body = result;

  }

  async list(ctx) {
    let { name } = ctx.query;
    let result = await db('select * from test', name);
    ctx.body = result;
  }

  async remove(ctx) {
    let { id } = ctx.request.body;
    let result = await db('delete from test where id =? ', id);
    ctx.body = result;
  }

  async update(ctx) {
    let { age, id } = ctx.request.body;
    let result = await db('update test set age = ? where id =? ', [age, id]);
    ctx.body = result;
  }

}


module.exports = new Test();