Template.createDebate.events = {
  'click #btnAddDebate': function(e){
    e.preventDefault();

    var title = $("#inputTitle").val();
    var initSlug = title.toLowerCase().replace(/ /g,'-').replace(/[^a-z0-9\-]/g, '');

    var slug = initSlug;
    for (var n = 2; Debates.find({slug: slug}).fetch().length > 0; ++n) {
      slug = initSlug + "-" + n;
      // #future Will be slow if many slug collisions
    }

    Debates.insert({
      "title" : title,
      "description" : $("#inputDescription").val(),
      "url" : $("#inputUrl").val(),
			"slug" : slug
    });
    Router.go('/debates/' + slug);
  }
}
