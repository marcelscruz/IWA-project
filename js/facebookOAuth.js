function statusChangeCallback(response) {
  if (response.status === 'connected') {
    getUserDetails();
    myApp.closeModal();
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
    myApp.loginScreen();
  }
}



function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    // console.log(response);
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
};
