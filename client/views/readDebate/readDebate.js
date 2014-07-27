Template.readDebate.events = {
  'click #btnAddComment': function(e){
    e.preventDefault();
    var parent = "asb";
    var text = "this is a test";
    var o = {
      "text" : text,
      "point-type" : null,
      "votes" : 0,
      "type" : "con",
      "user" : Meteor.userId()
    }
    // #? What's this
  },
  'click .add-comment' : function(e){
    Session.set("currentEditing", this._id);
    $("#comment-input").focus();
  },
  'keyup .edit-comment' : function(e){
    e.preventDefault();

    if(e.keyCode == 13){
			var value = $("#point-type").bootstrapSwitch('state');
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
  'keyup #new-point' : function(e){
    e.preventDefault();

    if(e.keyCode == 13){
      Points.insert({
        parent : this._id,
        text : $("#new-point").val(),
        dt : new Date(),
        type : "point"
      });

      $("#new-point").val('');
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
	$("#point-type").bootstrapSwitch();
}

Template.readDebate.rendered = function(){
	$("#point-evaluation").bootstrapSwitch();
}

Template.editingComment.destroyed = function(){
	$("#point-type").bootstrapSwitch('destroy');
}

UI.registerHelper("commentHelper" , function(parent){
  return Points.find({"parent": parent}, {"sort" : {"dt" : -1}});
});

