
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const newsList = await ctx.service.news.get();
    const news = await ctx.service.news.post();

    await ctx.render('news/list.tpl', { list: JSON.parse(newsList) });
  }

  async pay(){
    const ctx = this.ctx;
    const amount = await ctx.service.news.pay();

    ctx.body = amount.data.toString();
  }

  async easypay(){
    const ctx = this.ctx;
    const sult = await ctx.service.news.easypay();
    console.log(sult)
    //await ctx.render('news/pay.tpl', { data: amount });
    ctx.redirect(sult)
    //ctx.body = sult;

  }
}

module.exports = NewsController;
