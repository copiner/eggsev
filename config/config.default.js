// config/config.default.js

exports.keys = "MIIEowIBAAKCAQEAsJB4tuM2wLtbMkRGzZGF0mco2D9KVgrcdsHbv7xhBOhNyT5AAMlxtt07AksHymowfRn8UQ0oHksCJxqkHwpjQnc9pIdaJhmPt5S7NVueFi96HYaDPM80CTstgwb1F3a5v7r6uXJthfagfuoyr3IhNvLwi3uUIb5NYutaj01hUGF/4CfcdSH/dVXsPVT/UlgfLxnESIhBR5dzFlPqUxSRvWio8DwBIH7VGG8zQZ+cMm5A4w1za2QD2d++1HicMdpjeS0d+R2IRzbwxENf+jJiwUBoxrsMJpOqOT+aQ3afqA4QhLTFooiG9eTW+uZEbrTiDwInJyz5zGRj4dHWWIQQ1wIDAQABAoIBADQp2qAdrLVwJNdK+KgPEDxDIfwRZsLY3p1vVJ7m5rrubty/uWUCHshpv99Dj3+rs7uiC7teabXZbz9iTY6mIQEn/Vw4aNfMwXr5Q/3VnXTsfeVvMiKrDLKVezK0wYA3IVWVxjE3r0fevzf/tQ3EaC+1wn9S+Uam1HIfGlgwAkoepcc55rjQG/sp3f9BzOMX/6IZv7IFjTBJAalWdCo/5WUwpONKIs8qcabGt/a4ZaaQ+iFRfWT7NTK0txVYcPI+B+KmEYXk6VjtnG8TR144dqiBCnklcyLYPXtxIVQLwn+pFM7sU95DYwBh4pUsXi15N18Lp3ntC5I/zYr4GFCNqyECgYEA6zB08Vg2SMaj46enTiX1Ezoqx8F1GLyHvggeQfMT2ZoSIfZKBE1LWxiTu0feP/VMlLv6Gqm98qf8X0fme0Abo1kDHoaYNzLwimCCBpyG5cb0d+QecrufVfHH1KndZQYIBP7Iv4wgKAX5Azo5LdQG6Jm9xsxGb3UNTBEkfWvHvHkCgYEAwDAIn2VJJ5RcE5+La1nAmCi+n7a8bxjFDszke4s8uXIjphntrQ3WF/UCs3sjilExoppEyWZUxv7TqyaBR8EhA1YOfokZClhGb1GKGkc4timOJIboEMDuPi0ziY6+CABM6FOjRGF23yN5cjA6mKfbQtXg1gILF48eMHNIhw9nQ88CgYBvJOAu6cwFinIK9MDY6pEtu/BZpC/tN7NCd92stu3riKcHC7gg3lI9Q5kVCTqbqRW+uDLShOLyGLboZDckicBF6pvRwjOO6nDIRCFOdIw/bE09lz1YZRhAallQQ9IPmtERY0KFWvgbUe9CujIpWSjGpVkM6J5kr8FP8E35Q4UJqQKBgHFCXXKCIDCBEBpIZcNn60ZAjMZWzIm0UT09plDgZ3LqPvP+R8E6bDdGHsdjBDjZTKUEwRDni4KSXm94i6ubtzbeGkCbzvP3vdqQdRCzdEp2Btyj3FMzP7PIs5yXUIoqkyg/UfJUdddeco3GumGIWoDyxkOYhKznnOT0q4NcooClAoGBAMi7Pte2+7ldFocnS107wUV9cXPl/564q3Amf+NqKZ3iEANAaUa4hUqNkczuO49e67rTL2p/WTuYst65UlJXVI9dglAE8Wo+gcJHROpDvqCGi1e/KpavQJCGWFi/PDmnI1gQ1BZHK3JOLqSpA8BTn/wtTZ6OOgJo1Rc2UDMgugw4";

exports.akeys="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsrJ4AWHsC/tDbgyDbxa/DxtYo6+iak5sbsMVUCccP2QXbIC5C9XuRt9G/GSJ9N+nls+WuFAtdShzGCVu5KY1V6NM2eBSHB0StYBiABqWR1VoDZ6zIKHdTaZtwxbO4TmXQqQijNrZ3yn7VWFxQ8QkxooLEiVFGr/sirQtTQLh7tw/D4Pe1SAvTgOOpe5vEGWwJ3d1x+vpogrTCtZGsO60f4DwnvecUmNrp7UPm5UFzzfIUvtSSf2E4574r8NNyCwJndL/OZZB4sNNa4ll7UzCj5fETsg/j9cXIBTte+q/4gJ2FbhQjcNdicadzTlGUUaXqdQClY6JGcEp2DvgYDy3xQIDAQAB"
// exports.mysql = {
//   // database configuration
//   client: {
//     host: '127.0.0.1',
//     port: '3306',
//     user: '',
//     password: '',
//     database: 'test',
//   },
//   // load into app, default true
//   app: true,
//   // load into agent, default false
//   agent: false,
// };

exports.mongoose = {
  url: 'mongodb://127.0.0.1:27017/eggsev',
  options: {
    useUnifiedTopology: true
  }
}

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  serverUrl: 'https://httpbin.org/get',
};

exports.pay = {
  serverUrl: 'https://openapi.alipaydev.com/gateway.do'
};

exports.cluster = {
    listen:{
        port:7001,
        hostname:'127.0.0.1'
    }
}
