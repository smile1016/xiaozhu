const db = require('../model/db')
class RoomShow{
    async list(ctx){
        let rs = await db('select * from roomShow')
        ctx.body = rs;
    }
}

module.exports = new RoomShow();