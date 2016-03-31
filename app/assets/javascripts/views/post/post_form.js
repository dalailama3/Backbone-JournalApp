window.JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],

  events: {
    "submit form": "submit"
  },

  render: function () {

    var content = this.template({post: this.model});

    this.$el.html(content);

    return this;
  },


  submit: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()["post"];

    var newPost;
    if (typeof this.model === "undefined") {
      newPost = new JournalApp.Models.Post(params);
    } else {
      newPost = this.model;
      newPost.set(params);
    }



    newPost.save({}, {
      success: function () {

        JournalApp.Collections.posts.add(newPost);
        Backbone.history.navigate("", {trigger: true});

      }
    });
  }
});
