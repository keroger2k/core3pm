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
  var $statusBox = $('#update-status');
  var $messageBox = $('#user_message');
  
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

  $('.action-back').click(function(e) {
    var form = $(e.target).parents('form');
    form.find('input[type=text]').val('');
    form.find('textarea').val('');
  });

});

