
// app/service/swap/list.js
const Service = require('egg').Service;


class ListService extends Service {

  constructor(ctx){
      super(ctx)
  }
    
  async capture(tutor, session) {

      let t6 = 0, t7 = 0,t8=0,t9=0;
      for(let i=0; i<tutor.length;i++){
          if(tutor[i].status && tutor[i].grade == '6'){
              t6 += tutor[i].limit;
          }
          if(tutor[i].status && tutor[i].grade == '7'){
              t7 += tutor[i].limit;
          }

          if(tutor[i].status && tutor[i].grade == '8'){
              t8 += tutor[i].limit;
          }

          if(tutor[i].status && tutor[i].grade == '9'){
              t9 += tutor[i].limit;
          }

          tutor[i].count = 0;

      }

      console.log("tutor in grade 6 total times are : ", t6);
      console.log("tutor in grade 7 total times are : ", t7);
      console.log("tutor in grade 8 total times are : ", t8);
      console.log("tutor in grade 9 total times are : ", t9);

      //TODO???
      console.log("all exams are : ", session.length);

      if(t6+t7+t8+t9 != session.length){
          console.log("not equal...")
          return [];
      }
      
      for (let i=0; i< session.length; i++){
          if(session[i].status){
              session[i].valid = true;
          }
      }

      let exam = await this.first(tutor,session);

      exam = await this.second(tutor, session, exam);          


      return exam;
      
      
  }

  async first(tutor,session){

      let exam = [];
      
      for(let i=0; i<tutor.length; i++){
          for(let j=0; j<session.length;j++){
              if(
                  tutor[i].count < tutor[i].limit
                  && session[j].valid
                  && tutor[i].grade != session[j].grade
              ){
                  if(
                      tutor[i].supOut.indexOf(session[j].course) == '-1'
                   && tutor[i].subOut.indexOf(session[j].name+session[j].course) == '-1'
                  ){
                      tutor[i].count += 1;
                      exam.push(tutor[i].no+'|'+ i + '|'+session[j].no+'|'+j);
                      session[j].valid = false;
                  }
              }
          }
      }

      return exam;
  }

  async second(tutor, session, exam){

      let untutor = [],unsession = [];

      for(let i=0; i<tutor.length; i++){
          if(tutor[i].count<tutor[i].limit){
              tutor[i].idx = i;
              untutor.push(tutor[i]);
          }
      }

      for(let i=0;i<session.length;i++){
          if(session[i].valid){
              session[i].idx = i;
              unsession.push(session[i]);
          }
      }


      let k = 0, flag = false;

      for(let i=0; i<untutor.length;i++){

          for(let j=0;j<unsession.length;j++){
              let temp = false;

              let cp = exam[k].split('|');
              let ti = cp[1],si=cp[3];

              if(
                  tutor[i].count < tutor[i].limit
                  && session[j].valid
                  && tutor[ti].grade != session[j].grade
                  && tutor[i].grade != session[si].grade
              ){
                  if(
                      tutor[ti].supOut.indexOf(session[j].course) == '-1'
                      && tutor[ti].subOut.indexOf(session[j].name+session[j].course) == '-1'
                      && tutor[i].supOut.index(session[si].course) == '-1'
                      && tutor[i].subOut.index(session[si].name+session[si].course)=='-1'
                  ){
                      tutor[i].count +=1;
                      exam.splice(k,1);

                      exam.push(untutor[i].no+'|'+untutor[i].idx+"|"+session[si].no+'|'+si);
                      exam.push(tutor[ti].no+'|'+ti+"|"+unsession[j]+"|"+unsession[j].idx);

                      session[j].valid = false;

                      temp = true;

                      if(exam.length == session.length){
                          flag = true;
                          break;
                      }

                  }
                  
              }

              if(temp){
                  k = 0;
              } else {
                  k++;
              }
              
          }

          if(flag){
              break;
          }

      }

      return exam;
        
  }

  async sorted(tutor, exam){

      console.log(exam.length);
      let temp = {};

      for(let i=0; i<tutor.length;i++){
          temp[tutor[i].no] = [];
      }
      console.log(temp)
      for(let i=0;i<exam.length;i++){

          for(let t in temp){
              let arr = exam[i].split('|');
              if(arr[0] == t){
                  temp[t].push(arr[2]);
              }
          }
          
      }

      return temp;
  }    
  

}
module.exports = ListService;
