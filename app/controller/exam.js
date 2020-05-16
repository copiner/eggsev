
const Controller = require('egg').Controller;

class ExamController extends Controller {

  async add() {
      const ctx = this.ctx;
      await ctx.render('exam/add.tpl', { url: '/exam/create' });
  }

  async findone() {
      const ctx = this.ctx;
      const examId = ctx.params.id;
      const exam = await ctx.service.exam.findone(examId);//object
      await ctx.render('exam/one.tpl', { exam: exam });
  }

  async findall() {
      
      const ctx = this.ctx;
      const exams = await ctx.service.exam.findall();//arr
      console.log(exams);
      await ctx.render('exam/list.tpl', { exams: exams });
      
  }

  async create() {
    const { ctx, service } = this

    const payload = ctx.request.body || {}

    const res = await service.exam.create(payload)

    ctx.body = "created";
  }
}

module.exports = ExamController;
