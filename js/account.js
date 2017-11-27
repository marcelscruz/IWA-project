$(document).on('click', '#logout', function() {
  // console.log('close button pressed');
  myApp.showIndicator();
  FB.logout(function(response) {
    // Person is now logged out
    statusChangeCallback(response);
  });
});
