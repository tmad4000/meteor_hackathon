Router.configure({
  //layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});


Router.map(function () {

	this.route('home',{
		path:'/',
    template: 'home',
    layoutTemplate : 'default'
	});

  this.route('createDebate',{
    path:'/debate/new',
    layoutTemplate : 'default'
  });
});
