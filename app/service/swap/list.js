
// app/service/swap/list.js
const Service = require('egg').Service;


class ListService extends Service {

  constructor(ctx){
      super(ctx)
  }
    
  async capture(tutor, session) {

      let t6 = 0, t7 = 0,t8=0,t9=0;
      for(let i=0; i<tutor.length;i++){

          if(tutor[i].status){

              tutor[i].count = 0;              

              switch(parseInt(tutor[i].grade)){

              case 6:
                  t6 += tutor[i].limit;
                  break;
              case 7:
                  t7 += tutor[i].limit;
                  break;
              case 8:
                  t8 += tutor[i].limit;
                  break;
              case 9:
                  t9 += tutor[i].limit;
                  break;
              default:
                  console.log("unexcepted tutor grade");

              }

          }

      }

      console.log("tutor in grade 6 total times are : ", t6);
      console.log("tutor in grade 7 total times are : ", t7);
      console.log("tutor in grade 8 total times are : ", t8);
      console.log("tutor in grade 9 total times are : ", t9);

      
      let s6 = 0, s7 = 0, s8 = 0, s9 = 0;
      
      for (let i=0; i< session.length; i++){
          if(session[i].status){
              session[i].valid = true;
              switch(parseInt(session[i].grade)){

              case 6:
                  s6++;
                  break;
              case 7:
                  s7++;
                  break;
              case 8:
                  s8++;
                  break;
              case 9:
                  s9++;
                  break;
              default:
                  console.log("unexcepted session grade");
                  
              }
          }
      }

      console.log("session in grade 6 total times are : ", s6);
      console.log("session in grade 7 total times are : ", s7);
      console.log("session in grade 8 total times are : ", s8);
      console.log("session in grade 9 total times are : ", s9);
      


      if(t6+t7+t8+t9 != s6+s7+s8+s9){
          console.log("not equal...")
          return [];
      }
      
      console.log('session :', session.length);

      let exam = await this.first(tutor,session);
      console.log("first :", exam.length);

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

      console.log(untutor);
      console.log(unsession);

      let k = 0, flag = false;

      for(let i=0; i<untutor.length;i++){

          for(let j=0;j<unsession.length;j++){
              let temp = false;

              let cp = exam[k].split('|');
              let ti = cp[1],si=cp[3];

              if(
                  untutor[i].count < untutor[i].limit
                  && unsession[j].valid
                  && tutor[ti].grade != unsession[j].grade
                  && untutor[i].grade != session[si].grade
              ){
                  if(
                      tutor[ti].supOut.indexOf(unsession[j].course) == '-1'
                      && tutor[ti].subOut.indexOf(unsession[j].name+unsession[j].course) == '-1'
                      && untutor[i].supOut.indexOf(session[si].course) == '-1'
                      && untutor[i].subOut.indexOf(session[si].name+session[si].course)=='-1'
                  ){
                      untutor[i].count +=1;
                      exam.splice(k,1);

                      exam.push(untutor[i].no+'|'+untutor[i].idx+"|"+session[si].no+'|'+si);
                      exam.push(tutor[ti].no+'|'+ti+"|"+unsession[j].no+"|"+unsession[j].idx);

                      unsession[j].valid = false;

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


      let temp = {};

      for(let i=0; i<tutor.length;i++){
          temp[tutor[i].no] = [];
      }

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
