var User = Backbone.Model.extend({});

var Users = Backbone.Collection.extend({
  model: User,
  url: "/users/index"
});

var users = new Users();

var UserView = Backbone.View.extend({
  initialize: function () {
    _.bindAll(this, 'render');
    this.template = $("#user-list-template");
  },
  render: function () {
    var data = { items: this.collection.toJSON() };
    var html = this.template.render(data.items);
    $(this.el).html(html);
    return this;
  }
});

var InOutAdmin = Backbone.Router.extend({
  initialize: function () {
    listView = new UserView({ collection: users, el: "#user-list tbody" });
  },
  routes: {
    "": "index",
  },
  index: function () {
      listView.render();
  },
});

var inout = {};

inout.refresh = function() {
  var users = $('#user-list');
  if(users.length === 1) {
    setTimeout(inout.replaceUsers, 20000);
  }
};

inout.replaceUsers = function() {
  var $body = $('#user-list').find('tbody');
  var i = 0;
  $.getJSON('/', function(data) {
    $body.empty();
    $body.html($('#user-list-template').render(data));
    inout.refresh();
  });
};

$(function() {
  users.fetch({
    success: function () {
      window.app = new InOutAdmin();
      Backbone.history.start();
    },
    error: function () {
    }
  });

  var $statusBox = $('#update-status');
  var $messageBox = $('#user_message');
  var $radioButtons= $('input[type=radio]');
  
  inout.refresh();

  $('div.error,div.alert,div.notice,div.success,div.info').animate({ 
      opacity: 0 
    }, 
    10000
  );

  $statusBox.click(function(e) {
    e.stopPropagation();
    $('.my-status').toggle(); 
  });

  $('.action-back').click(function() {
    $radioButtons.first().attr('checked', true)
  });

});

