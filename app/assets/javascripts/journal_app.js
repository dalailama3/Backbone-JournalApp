window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var view = new JournalApp.Views.PostsIndex ({
      collection: JournalApp.Collections.posts
    });

    JournalApp.Collections.posts.fetch({reset: true});

    $("body").append(view.render().$el);


  }
};



$(document).ready(function(){
  JournalApp.initialize();
});
