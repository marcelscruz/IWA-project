// Fade In for spinner in Splash Screen
setTimeout(function() {
  $('#splash-screen #preloader').fadeIn(2000);
}, 500);

function statusChangeCallback(response) {
  // console.log(response.status);
  if (response.status === 'connected' && $('#splash').hasClass('modal-in')) {
    getUserDetails();
    setTimeout(function() {
      myApp.popup('#popup-welcome');
    }, 2000);
    setTimeout(function() {
      myApp.closeModal('#splash');
      myApp.closeModal('#popup-welcome');
    }, 4000);
    // console.log('first if');
  } else if (response.status === 'connected' && !$('#splash').hasClass('modal-in')) {
    setTimeout(function() {
      myApp.popup('#popup-welcome');
    }, 2000);
    setTimeout(function() {
      myApp.closeModal('#popup-welcome');
    }, 4000);
    console.log('second if');
  } else {
    setTimeout(function() {
      myApp.hideIndicator();
      myApp.popup('#popup-login');
    }, 3000);
    // console.log('else');
  }
}

function checkLoginState() {
  $('#login-preloader').fadeIn(500);
  // console.log('logout button pressed');
  FB.getLoginStatus(function(response) {

    statusChangeCallback(response);

    setTimeout(function() {
        myApp.closeModal('#popup-login');
    }, 3000);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '122973101745992', cookie: true, // enable cookies to allow the server to access
    // the session
    xfbml: true, // parse social plugins on this page
    version: 'v2.8' // use graph api version 2.8
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    // console.log(response);
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id))
    return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=122973101745992';
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

function getUserDetails() {
  FB.api('/me', function(response) {
    getProfilePicture(response.name, response.id);
  });
}

function getProfilePicture(name, id) {
  FB.api('/' + id + '/picture', {type: 'normal'}, function (response) {
    if (response && !response.error) {
      // console.log(response.data);
      printUserDetails(name, response.data.url);
    } else {
      console.log('could not get profile picture');
    }
  });
}

function printUserDetails(name, url) {
  // console.log(name, url);
  $('#author-input').attr('value', name);

  $('#profile-picture').html(
    `
      <img src='${url}'>
    `
  );

  $('#username').html(name);

  $('#welcome-text-2').html(name + ',');
};
