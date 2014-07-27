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
    console.log(this);
  }
}
