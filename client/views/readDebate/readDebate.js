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

UI.registerHelper('list', function(items, options) {
	console.log(items);
	console.log(options);
	for(var i = 0; i < items.length; i++){
		console.log(items.children[i].text);
	}
});
