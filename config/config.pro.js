// config/config.${env}.js
exports.mysql = {
  // database configuration
  client: {
    host: 'mysql.com',
    port: '3306',
    user: 'test_user',
    password: 'test_password',
    database: 'test',
  },
  // load into app, default true
  app: true,
  // load into agent, default false
  agent: false,
};
