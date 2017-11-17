// Initialize your app
var myApp = new Framework7({
  // cache: false
});

// Export selectors engine
var $$ = Dom7;

// Add views
var newsView = myApp.addView('#news');
// var view2 = myApp.addView('#view-2', {
//     // Because we use fixed-through navbar we can enable dynamic navbar
//     dynamicNavbar: true
// });
var addStoryView = myApp.addView('#add-story');
var accountView = myApp.addView('#account');
var jsonView = myApp.addView('#json');
