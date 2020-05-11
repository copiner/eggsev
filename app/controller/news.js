
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const newsList = await ctx.service.news.get();

    await ctx.render('news/list.tpl', { list: JSON.parse(newsList) });
  }
}

module.exports = NewsController;
