window.JournalApp.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow"
  },

  postsShow: function (id) {
    var model = JournalApp.Collections.posts.get(id)
    var view = new JournalApp.Views.PostShow({
      model: model
    });
    $("body").html(view.render().$el);
  },

  postsIndex: function () {
    var view = new JournalApp.Views.PostsIndex ({
      collection: JournalApp.Collections.posts
    });

    JournalApp.Collections.posts.fetch({reset: true});

    $("body").html(view.render().$el);
  }
});
