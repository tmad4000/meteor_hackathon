Template.readDebate.events = {
  'click #btnAddComment': function(e){
    e.preventDefault();
    var parent = "asb";
    var text = "this is a test";
    var o = {
      "text" : text,
      "evaluation" : null,
      "votes" : 0,
      "type" : "con",
      "user" : Meteor.userId()
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
        dt : new Date(),
        type : "con"
      });
      Session.set("currentEditing", null);
      return false;
    }
    return false;
  }
  /*,
  'blur #comment-input' : function(e){
    Session.set("currentEditing", null);
<<<<<<< HEAD
  },
	'submit #newPoint':function(e){
		e.preventDefault();
		alert('hi');
	}
=======
  }*/
>>>>>>> 505010778843d7136aa8b6c2f4f4fb8116f5c358
}

Template.comment.pro = function(){
  return this.type === "pro";
}
Template.comment.con = function(){
  return this.type === "con";
}
Template.comment.editing = function(){
  return Session.equals("currentEditing", this._id);
}

Template.editingComment.rendered = function(){
  $("#comment-input").focus();
	$("#evaluation").bootstrapSwitch();
}

Template.editingComment.destroyed = function(){
	$("#evaluation").bootstrapSwitch('destroy');
}

UI.registerHelper("commentHelper" , function(parent){
  return Points.find({"parent": parent}, {"sort" : {"dt" : -1}});
});

