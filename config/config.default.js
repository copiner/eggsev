// config/config.default.js
exports.keys = "wdaonngg";

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  serverUrl: 'https://httpbin.org/get',
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
