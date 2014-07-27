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
<<<<<<< HEAD
		onBeforeAction: function(){
			Debates.findOne({'slug' : this.params.slug});
		},
		data: function(){
			var templateData = Debates.findOne({'slug': this.params.slug});
			return templateData;
		}
=======
	  data: function() { return Debates.findOne({'slug': this.params.slug}) },
    waitOn: function() { return Meteor.subscribe('debates')}
>>>>>>> 0a8d57d0e3b431cd40ee5d3a2579c90f59a4abdb
	});
});
