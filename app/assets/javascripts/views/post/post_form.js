window.JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  events: {
    "submit form": "submit"
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["post"];
    var newPost = new JournalApp.Models.Post(params);

    newPost.save({}, {
      success: function () {

        JournalApp.Collections.posts.add(newPost);
        Backbone.history.navigate("", {trigger: true});

      }
    });

  }
});
