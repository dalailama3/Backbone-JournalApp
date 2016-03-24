window.JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  render: function () {

    var renderedContent = this.template({post: this.model});
    this.$el.html(renderedContent);

    return this;
  }
});
