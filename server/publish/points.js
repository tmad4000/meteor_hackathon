Meteor.publish("points", function () {
  return Points.find();
});

Points.allow({
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