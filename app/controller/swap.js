
const Controller = require('egg').Controller;

class SwapController extends Controller {

  async index() {
      const ctx = this.ctx;
      await ctx.render('swap/index.tpl', { url: '/exam/create' });
  }

  async carry(){
      const { ctx, service } = this;
      const res = await service.swap.carry();
      //TODO;
      await ctx.render('swap/swap.tpl', { url: '/exam/create' });      
  }

  async create() {
    const { ctx, service } = this

    const payload = ctx.request.body || {}

    const res = await service.swap.create(payload)

    ctx.body = "swap created";
  }
}

module.exports = SwapController;
