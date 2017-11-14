// Initialize your app
var myApp = new Framework7({
  // cache: false
});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#news');
// var view2 = myApp.addView('#view-2', {
//     // Because we use fixed-through navbar we can enable dynamic navbar
//     dynamicNavbar: true
// });
var view2 = myApp.addView('#add-story');
var view3 = myApp.addView('#account');
var view4 = myApp.addView('#json');
