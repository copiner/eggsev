// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  //get
  async get() {
    // read config
    const { serverUrl } = this.config.news;

    const ctx = this.ctx;
    const result = await ctx.curl(`${serverUrl}?foo=bar`);

    return result.data.toString()
  }

  //post
  async post() {
    const ctx = this.ctx;
    const result = await ctx.curl('https://httpbin.org/post', {
      // method is required
      method: 'POST',
      // telling HttpClient to send data as JSON by contentType
      contentType: 'json',
      data: {
        hello: 'world',
        now: Date.now(),
      },
      // telling HttpClient to process the return body as JSON format explicitly
      dataType: 'json',
    });
    return result.data;
  }

}

module.exports = NewsService;
