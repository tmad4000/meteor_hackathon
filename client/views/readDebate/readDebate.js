Template.readDebate.events = {
  'click #btnAddComment': function(e){
    e.preventDefault();
    var parent = "asb";
    var text = "this is a test";
    var o = {
      "text" : text,
      "evaluation" : null,
      "votes" : 0,
      "type" : "con"
    }
  },
  'click .add-comment' : function(e){
    Session.set("currentEditing", this._id);
    $("#testt").focus();
  },
  'submit #comment-input' : function(e){
    e.preventDefault();
    Points.insert({
      parent : this._id,
      text : $("#comment-input").find("input").val()
    });
    Session.set("currentEditing", null);
  }
}

Template.comment.editing = function(){
  return Session.equals("currentEditing", this._id);
}

UI.registerHelper("commentHelper" , function(parent){
  return Points.find({"parent": parent})
});

