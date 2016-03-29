window.JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts/index_item"],
  tagName: "tr",

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

window.JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],
  render: function () {
    var content = this.template({post: this.model})
    this.$el.html(content);

    return this;
  }

});



window.JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST["posts/index"],
  tagName: "table",


  initialize: function (options) {
    this.listenTo(this.collection,
      "remove reset",
      this.render
    );
  },



  refresh: function () {
    var view = this;
    this.collection.fetch();
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
