// app/service/user.js
const Service = require('egg').Service;

class ExamService extends Service {

  async findone(_id) {
    try {
      const exam = await this.ctx.model.Exam.findById(_id)
      if (!exam) {
        this.ctx.throw(404, 'user not found')
      }
      return exam;
    } catch (e){
      console.log(e);
    }

  }

  async findall() {
    const exam = await this.ctx.model.Exam.find()
    if (!exam) {
      this.ctx.throw(404, 'user not found')
    }
    return exam;
  }

  async update(_id, payload) {
    const { ctx } = this
    return ctx.model.Exam.findByIdAndUpdate(_id, payload)
  }

  async create(payload) {
    //or insertMany
    const created = await this.ctx.model.Exam.create(payload)
    return created;
  }

}
module.exports = ExamService;
