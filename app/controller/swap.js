
const Controller = require('egg').Controller;

class SwapController extends Controller {

  async index() {
      const ctx = this.ctx;
      await ctx.render('swap/index.tpl', { url: '/exam/create' });
  }

  async carry(){
      const { ctx, service } = this;
      const result = await service.swap.index.carry();

      await ctx.render('swap/list.tpl', { data: result });      
  }

  async create() {
    const { ctx, service } = this

    const payload = ctx.request.body || {}

    const res = await service.swap.index.create(payload)

    ctx.body = "swap created";
  }
}

module.exports = SwapController;
