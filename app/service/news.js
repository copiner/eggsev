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


  async pay(){
    const { serverUrl } = this.config.pay;
    const pkey = this.config.keys;
    const ctx = this.ctx;

    // const pkey = fs.readFileSync('./private-key.pem', 'ascii');
    const result = await ctx.curl(serverUrl, {
      // method is required
      method: 'GET',
      // telling HttpClient to send data as JSON by contentType
      contentType: 'json',
      data: {
        "app_id":"2016102200735458",
        "method":"alipay.trade.page.pay",
        "sign_type":"RSA2",
        "sign":pkey,
        "version":"1.0",
        "charset":"utf-8",
        "timestamp":"2020-06-02 03:07:50",
        "biz_content":{
          "out_trade_no":'202006021542',
          "product_code":"FAST_INSTANT_TRADE_PAY",
          "total_amount":"10",
          "subject":"sun is shine"
        }
      },
      // telling HttpClient to process the return body as JSON format explicitly
      dataType: 'text',
    });

    return result;
    //202006021530 202006021531 202006021532 202006021533 202006021534 202006021535
    //202006021537 202006021538 202006021539 202006021542
  }

  async easypay(){

    const { formData,alipaySdk } = this.ctx.helper;

    formData.setMethod('get');
    formData.addField('return_url', 'https://m.alipay.com/Gk8NF23');
    formData.addField('notifyUrl', 'http://api.test.alipay.net/atinterface/receive_notify.htm');
    formData.addField('bizContent', {
      outTradeNo: '202006031352',
      productCode: 'FAST_INSTANT_TRADE_PAY',
      totalAmount: '2.00',
      subject: '商品'
    });

    const result = await alipaySdk.exec(
      'alipay.trade.page.pay',
      {},
      { formData: formData },
    );


    return result;
  }

}

module.exports = NewsService;
