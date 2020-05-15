
const Controller = require('egg').Controller;

class UserController extends Controller {

  async show() {
      const ctx = this.ctx;
      await ctx.render('user/add.tpl', { url: '/user/create' });
  }

  async findone() {
      const ctx = this.ctx;
      const userId = ctx.params.id;
      const user = await ctx.service.user.findone(userId);//object
      await ctx.render('user/one.tpl', { user: user });
  }

  async findall() {
      const ctx = this.ctx;
      const users = await ctx.service.user.findall();//arr
      await ctx.render('user/list.tpl', { users: users });
  }

  async create() {
    const { ctx, service } = this

    const payload = ctx.request.body || {}

    const res = await service.user.create(payload)

    ctx.body = "created";
  }
}

module.exports = UserController;
