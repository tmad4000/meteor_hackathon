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
    path:'/debates/new',
    layoutTemplate : 'default'
  });

	this.route('readDebate',{
		path: '/debates/:slug',
		layoutTemplate : 'default',
		onBeforeAction: function(){
			Debates.findOne({'slug' : this.params.slug});
		},
		data: function(){
			var templateData = Debates.findOne({'slug': this.params.slug});
			return templateData;
		}
	});
});
