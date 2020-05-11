// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {

  async find(uid) {
   // assume we have the user id then trying to get the user details from database
    const user = await this.app.mysql.get('users', { id: 11 });
    return { user };
  }

  //INSERT 重复请求，redis放置流水号，避免重复请求
  async insert(uid) {
    //insert a record title 'Hello World' to 'posts' table
    //INSERT INTO `posts`(`title`) VALUES('Hello World');
    const result = await this.app.mysql.insert('posts', { title: 'Hello World' });
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
  async read(){
    //SELECT * FROM `posts` WHERE `id` = 12 LIMIT 0, 1;
    const post = await this.app.mysql.get('posts', { id: 12 });

    //SELECT * FROM `posts`;
    //const results = await this.app.mysql.select('posts');
    /*
    const results = await this.app.mysql.select('posts', { // search posts table
      where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE criteria
      columns: ['author', 'title'], // get the value of certain columns
      orders: [['created_at','desc'], ['id','desc']], // sort order
      limit: 10, // limit the return rows
      offset: 0, // data offset
    });

    => SELECT `author`, `title` FROM `posts`
      WHERE `status` = 'draft' AND `author` IN('author1','author2')
      ORDER BY `created_at` DESC, `id` DESC LIMIT 0, 10;
    */
    return { post }
  }

  //Update
  async update(){
    // modify data and search by primary key ID, and refresh
    // UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE id = 123 ;
    const row = {
      id: 123,
      name: 'fengmk2',
      otherField: 'other field value',    // any other fields u want to update
      modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    };
    const result = await this.app.mysql.update('posts', row); // update records in 'posts'

    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;

    /*
    // if primary key is your custom id,such as custom_id,you should config it in `where`
      const row = {
        name: 'fengmk2',
        otherField: 'other field value',    // any other fields u want to update
        modifiedAt: this.app.mysql.literals.now, // `now()` on db server
      };

      const options = {
        where: {
          custom_id: 456
        }
      };
      const result = await this.app.mysql.update('posts', row, options); // update records in 'posts'

      => UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE custom_id = 456 ;

      // check if update is success or failure
      const updateSuccess = result.affectedRows === 1;
    */
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
