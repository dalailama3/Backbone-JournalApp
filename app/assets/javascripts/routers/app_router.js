window.JournalApp.Routers.AppRouter = Backbone.Router.extend({
  currentView: null,
  routes: {
    "": "postsIndex",

    "posts/new": "newPost",
    "posts/edit": "editPost",
    "posts/:id": "postsShow"
  },

  newPost: function () {
    var newView = new JournalApp.Views.PostForm({
      collection: JournalApp.Collections.posts
    });


    this._swapView(newView);
  },

  editPost: function () {
    var id = $("a.edit-post").data("id");
    var editPost = JournalApp.Collections.posts.getOrFetch(id);

    var editView = new JournalApp.Views.PostForm({
      model: editPost
    });

    this._swapView(editView);
  },

  postsShow: function (id) {
    var model = JournalApp.Collections.posts.getOrFetch(id)
    var showView = new JournalApp.Views.PostShow({
      model: model
    });

    this._swapView(showView);
  },

  postsIndex: function () {
    var indexView = new JournalApp.Views.PostsIndex ({
      collection: JournalApp.Collections.posts
    });

    JournalApp.Collections.posts.fetch({reset: true});

    this._swapView(indexView);
  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    } else {
      this.currentView = view;
    }
    $("body").html(view.render().$el);

  }
});
