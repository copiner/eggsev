// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {

  //INSERT 重复请求，redis放置流水号，避免重复请求
    async divein(uid) {
    //insert a record title 'Hello World' to 'posts' table
    //INSERT INTO `posts`(`title`) VALUES('Hello World');
      const result = await this.app.mysql.insert('posts', {
          id:uid,
          title: 'Hello World',
          author: "wda",
          content:'alter to become different to make sth different'
          
      });
    /*
    console.log(result);
    =>
    {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 3710,
      serverStatus: 2,
      warningCount: 2,
      message: '',
      protocol41: true,
      changedRows: 0
    }

    // check if insertion is success or failure
    const insertSuccess = result.affectedRows === 1;
    */
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }

  //read
  async read(id){
    //SELECT * FROM `posts` WHERE `id` = 12 LIMIT 0, 1;
    const post = await this.app.mysql.get('posts', { id: id });

    //SELECT * FROM `posts`;
    //const results = await this.app.mysql.select('posts');
    return { post }
  }

  //Update
  async update(){
    // modify data and search by primary key ID, and refresh
    // UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE id = 123 ;
    const row = {
      id: 123,
      author: 'fengmk2',
      title: 'other field value',    // any other fields u want to update
      content:"vend order date coutry zip"
    };
    const result = await this.app.mysql.update('posts', row); // update records in 'posts'

    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;

  }

  async delete(){
    // DELETE FROM `posts` WHERE `author` = 'fengmk2';
    const result = await this.app.mysql.delete('posts', {
      author: 'fengmk2',
    });

    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
}
