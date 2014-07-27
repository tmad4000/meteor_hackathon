Meteor.publish("debates", function () {
  return Debates.find();
});

Meteor.publish("debatesComments", function(e){
	console.log(e);	
});

Debates.allow({
  insert: function () {
      return true;
  },

  remove: function (){
      return true;    
  },

  update: function() {
      return true;    
  }
});

