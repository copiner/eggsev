// config/config.default.js

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

exports.keys = "wdaonngg";

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.middleware = [
  'robot'
];

exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};
//curl localhost:7001/news -A "Baiduspider"

exports.news = {
  serverUrl: 'https://httpbin.org/get',
};
