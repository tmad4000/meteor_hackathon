Meteor.publish("debates", function () {
  return Debates.find();
});

Debates.allow({
  insert:  function (userId, doc) {
      if (Debates.find({"slug":doc.slug}).count() == 0){
        return true;
      }
      return false;
  },

  remove: function (){
      return false;    
  },

  update: function() {
      return false;
  }
});

