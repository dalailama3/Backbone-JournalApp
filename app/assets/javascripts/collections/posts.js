window.JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: JournalApp.Models.Post,

  getOrFetch: function (id) {
    var posts = this;
    var post;

    if (post = this.get(id)) {
      post.fetch()
    } else {
      post = new JournalApp.Models.Post({id: id});
      post.fetch({
        success: function() {
          posts.add(post);
        }
      });

    }
    return post;
  }
});
JournalApp.Collections.posts = new JournalApp.Collections.Posts();
