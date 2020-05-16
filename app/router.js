
module.exports = app => {
    const { router, controller } = app;
    
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    
    router.get('/user/add', controller.user.add);
    router.get('/user/:id', controller.user.findone);
    router.get('/users', controller.user.findall);
    router.post('/user/create', controller.user.create)
    
    router.get('/exam/add', controller.exam.add);
    router.get('/exam/:id', controller.exam.findone);
    router.get('/exams', controller.exam.findall);
    router.post('/exam/create', controller.exam.create)

    router.get('/swap', controller.swap.index);
    router.get('/swap/carry', controller.swap.carry);    
    router.post('/swap/create', controller.swap.create)
    
};
