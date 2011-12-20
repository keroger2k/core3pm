var inout = {};

inout.refresh = function() {
  var users = $('#user-list');
  if(users.length === 1) {
    setTimeout(inout.replaceUsers, 20000);
  }
};

inout.replaceUsers = function() {
  var $body = $('#user-list');
  var i = 0;
  $.getJSON('/', function(data) {
    $body.empty();
    $body.html($('#user-list-template').render(data));
    inout.refresh();
  });
};

$(function() {
  var $statusBox = $('#my-status');
  var $messageBox = $('#user_message', $statusBox);
  var $radioButtons= $('input[type=radio]', $statusBox);
  var $currentStatus = $('#main-nav').find('.status');

  inout.refresh();

  $('div.error,div.alert,div.notice,div.success,div.info').animate({ 
      opacity: 0 
    }, 
    10000
  );

  $statusBox.click(function(e) {
    e.stopPropagation(); 
  });

  $('body').click(function() {
    if($statusBox.is(":visible")) {
      $statusBox.hide();
    }
  });

  $('span.status').click(function(e) {
    e.stopPropagation();
    $statusBox.toggle();
  });

  $('.action-back', $statusBox).click(function() {
    $messageBox.val('');
    $radioButtons.first().attr('checked', true)
  });

});

