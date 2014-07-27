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
  'keyup .edit-comment' : function(e){
    e.preventDefault();

    if(e.keyCode == 13){
			var value = $("#evaluation").bootstrapSwitch('state');
			if(value){
				value = 'pro';
			} else {
				value = 'con';
			}
      Points.insert({
        parent : this._id,
        text : $("#comment-input").val(),
        dt : new Date(),
        type : value 
      });
      Session.set("currentEditing", null);
      return false;
    }
    return false;
  },
  'keyup #newPoint' : function(e){
    e.preventDefault();
    if(e.keyCode == 13){
      Points.insert({
        parent : this._id,
        text : $("#newPoint").val(),
        dt : new Date(),
        type : "point"
      });
      return false;
    }
    return false;
  }
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

Template.readDebate.rendered = function(){
	$("#pointEvaluation").bootstrapSwitch();
}

Template.editingComment.destroyed = function(){
	$("#evaluation").bootstrapSwitch('destroy');
}

UI.registerHelper("commentHelper" , function(parent){
  return Points.find({"parent": parent}, {"sort" : {"dt" : -1}});
});

