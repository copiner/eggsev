
const Controller = require('egg').Controller;

class ExamController extends Controller {

  async show() {
      const ctx = this.ctx;
      await ctx.render('user/add.tpl', { url: '/user/create' });
  }

  async findone() {
      const ctx = this.ctx;
      const userId = ctx.params.id;
      const exam = await ctx.service.exam.findone(userId);//object
      await ctx.render('user/one.tpl', { exam: exam });
  }

  async findall() {
      const ctx = this.ctx;
      const exam = await ctx.service.exam.findall();//arr
      await ctx.render('user/list.tpl', { exam: exam });
  }

  async create() {
    const { ctx, service } = this

    const payload = ctx.request.body || {}

    const res = await service.exam.create(payload)

    ctx.body = "created";
  }
}

module.exports = ExamController;
