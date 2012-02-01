$.ajaxSetup ({
    cache: false
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
  $.getJSON('/?callback=', function(data) {
    $body.empty();
    $body.html($('#user-list-template').render(data));
    inout.refresh();
  });
};

$(function() {
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

