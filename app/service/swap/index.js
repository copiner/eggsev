// app/service/swap.js
const Service = require('egg').Service;


class IndexService extends Service {

  constructor(ctx){
      super(ctx)
  }
    
  async carry() {
      const { ctx, service } = this;
      
      const users = await this.findUsers();
      const exams = await this.findExams();

//      console.log(ctx.helper.shuffle);
      if(users.length == '0'|| !users){
          return [];
      }
      if(exams.length == '0'|| !exams){
          return [];
      }
      
      const one = await service.swap.list.capture(users, exams);

      const two = await service.swap.list.sorted(users,one);

      return two;
      //TODO
  }

    
  async findUsers() {
      try{
          return  await this.ctx.model.User.find()
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
module.exports = IndexService;
