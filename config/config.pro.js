// config/config.${env}.js
exports.mysql = {
  // database configuration
  client: {
    host: '127.0.0.1',
    port: '3306',
    user: '',
    password: '',
    database: 'test',
  },
  // load into app, default true
  app: true,
  // load into agent, default false
  agent: false,
};
