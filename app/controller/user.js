

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const ctx = this.ctx;
      const userId = ctx.params.id;
      console.log(userId)
      const inner = await ctx.service.user.divein(userId);
      console.log(inner);
      const user = await ctx.service.user.read(userId);
      console.log(user);
    ctx.body = "user";
  }
}

module.exports = UserController;
