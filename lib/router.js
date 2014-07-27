Router.configure({
  //layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});


Router.map(function () {

	this.route('home',{
		path:'/',
    template: 'home',
    layoutTemplate : 'default',
		action: function(){
			console.log(this.params);		
		}
	});

  this.route('createDebate',{
    path:'/debates/new',
    layoutTemplate : 'default'
  });

	this.route('readDebate',{
		path: '/debates/:slug',
		layoutTemplate : 'default',
		data: function(){
			var templateData = Debates.findOne({'slug': this.params.slug});
			return templateData;
		}
	});
});
