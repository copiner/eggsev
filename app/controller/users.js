
const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
      const ctx = this.ctx;
      const userId = ctx.params.id;
      const inner = await ctx.service.users.divein(userId);
      const user = await ctx.service.users.read(userId);
      ctx.body = "user";
  }
}

module.exports = UserController;
