Meteor.publish("points", function () {
  return Points.find();
});

Points.allow({
  insert: function (userId, doc) {
    if (userId && doc.text != ""){
      return true;
    }
  },

  remove: function (){
      return false;    
  },

  update: function(userId, doc) {
    if (user == userId){
      return true;    
    }
    return false; 
  }

});