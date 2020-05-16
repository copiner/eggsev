// app/service/swap.js
const Service = require('egg').Service;

class SwapService extends Service {

  async carry() {

      const users = this.findUsers();
      const exams = this.findExams();

      //TODO
  }

    
  async findUsers() {
      try{
          return await this.ctx.model.User.find()
      } catch (e){
          console.log(e);
      }
  }

  async findExams() {
      try{
          return await this.ctx.model.Exam.find()
      } catch (e){
          console.log(e);
      }
  }

  async create(payload) {

    const created = await this.ctx.model.Exam.create(payload)
    return created;
  }

}
module.exports = SwapService;
