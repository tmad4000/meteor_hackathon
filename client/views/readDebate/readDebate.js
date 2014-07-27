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
    $("#comment-input").focus();
  },
  'keyup #comment-input' : function(e){
    e.preventDefault();
    if(e.keyCode == 13){
      Points.insert({
        parent : this._id,
        text : $("#comment-input").val(),
        dt : new Date()
      });
      Session.set("currentEditing", null);
      return false;
    }
    return false;
  }
}

Template.comment.editing = function(){
  return Session.equals("currentEditing", this._id);
}

Template.editingComment.rendered = function(){
  $("#comment-input").focus();
}

UI.registerHelper("commentHelper" , function(parent){
  return Points.find({"parent": parent}, {"sort" : {"dt" : -1}});
});

