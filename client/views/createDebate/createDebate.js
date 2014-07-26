Template.createDebate.events = {
  'click #btnAddDebate': function(e){
    e.preventDefault();
    var title = $("#inputTitle").val();
    var description = $("#inputDescription").val();
    var url = $("#inputUrl").val();
    var slug = $("#inputSlug").val();
    Debates.insert({
      "title" : title,
      "description" : description,
      "url" : url,
      "slug" : slug
    });
    Router.go('/');
  }
}
