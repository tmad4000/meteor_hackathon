Meteor.publish("debates", function () {
  return Debates.find();
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