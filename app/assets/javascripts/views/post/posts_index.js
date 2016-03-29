window.JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST["posts/index"],
  tagName: "ul",


  initialize: function (options) {
    this.listenTo(this.collection,
      "remove reset add",
      this.render
    );
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var that = this;

    this.collection.each(function(post) {

      var li = new JournalApp.Views.PostsIndexItem({model: post});
      that.$el.append(li.render().$el);
    });

    return this;
  }
});
