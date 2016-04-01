window.JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],

  initialize: function (options) {
    this.listenTo(this.model,
      "sync", this.render
    );
  },

  events: {
    "click button.delete": "deletePost",
    "dblclick h3.edit-title": "activateTitleField",
    "blur h3.edit-title": "saveTitleField",
    "dblclick div.edit-body": "activateBodyField",
    "blur div.edit-body": "saveBodyField"
  },

  activateTitleField: function () {
    var newContent = $("input.post-title").clone().attr("type", "text");

    this.$("h3.edit-title").html(newContent);

  },

  saveTitleField: function () {
    var content = $("input.post-title").clone();
    var titleValue = content.val();
    this.$("h3.edit-title").html(titleValue);
    this.model.save({title: titleValue});
  },

  activateBodyField: function () {
    var content = $("#post-body").show();
    this.$("div.edit-body").html(content);
  },

  saveBodyField: function () {
    var content = $("#post-body").clone();
    var bodyVal = content.val();
    this.$("div.edit-body").html(bodyVal);
    this.model.save({body: bodyVal});
  },

  deletePost: function (event) {
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("", {trigger: true});
      }
    });
  },

  render: function () {
    var content = this.template({post: this.model})
    this.$el.html(content);

    return this;
  }

});
