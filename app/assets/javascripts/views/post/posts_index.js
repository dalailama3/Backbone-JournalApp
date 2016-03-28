window.JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts/index_item"],
  tagName: "li",

  

  render: function () {
    var renderedContent = this.template({post: this.model});
    this.$el.html(renderedContent);

    return this;
  }
});



window.JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST["posts/index"],

  // initialize: function (options) {
  //   this.posts = options.posts;
  // },

  render: function () {
    var that = this;
    JournalApp.Collections.posts.each(function(post) {

      var li = new JournalApp.Views.PostsIndexItem({model: post});

      var content = li.render().$el
      that.$el.append(content);


    });
    // var renderedContent = this.template({posts: this.collection});
    // this.$el.html(renderedContent);

    return this;
  }


});
