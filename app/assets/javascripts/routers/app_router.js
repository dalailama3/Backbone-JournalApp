window.JournalApp.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",

    "posts/new": "newPost",
    "posts/edit": "editPost",
    "posts/:id": "postsShow"
  },

  newPost: function () {
    var view = new JournalApp.Views.PostForm({
      collection: JournalApp.Collections.posts
    });
    $("body").html(view.render().$el);
  },

  editPost: function () {
    var id = $("a.edit-post").data("id");
    var editPost = JournalApp.Collections.posts.getOrFetch(id);

    var editView = new JournalApp.Views.PostForm({
      model: editPost
    });

    $("body").html(editView.render().$el);
  },

  postsShow: function (id) {
    var model = JournalApp.Collections.posts.getOrFetch(id)
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
