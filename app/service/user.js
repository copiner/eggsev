// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {

  async findone(_id) {
    try {
      const user = await this.ctx.model.User.findById(_id)
      if (!user) {
        this.ctx.throw(404, 'user not found')
      }
      return user;
    } catch (e){
      console.log(e);
    }

  }

  async findall() {
    const user = await this.ctx.model.User.find()
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user;
  }

  async update(_id, payload) {
    const { ctx } = this
    return ctx.model.User.findByIdAndUpdate(_id, payload)
  }

  async create(payload) {
    //or insertMany
    const created = await this.ctx.model.User.create(payload)
    return created;
  }

}
module.exports = UserService;
