window.JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts/index_item"],


  events: {
    "click button.delete": "deleteItem"
  },

  deleteItem: function () {
    this.model.destroy()
  },

  render: function () {
    var renderedContent = this.template({post: this.model});
    this.$el.html(renderedContent);

    return this;
  }
});
