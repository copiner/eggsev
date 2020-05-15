
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);

  router.get('/user/show', controller.user.show);
  router.get('/user/:id', controller.user.findone);
  router.get('/user/', controller.user.findall);
  router.post('/user/create', controller.user.create)
};
