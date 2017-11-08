$.get( "../login.html", function( data ) {
  $( "#login" ).html( data );
});

// LOADED STRAIGHT FROM INDEX
// $.get( "../news.html", function( data ) {
//   $( "#news" ).html( data );
// });

$.get( "../add-story.html", function( data ) {
  $( "#add-story" ).html( data );
});

$.get( "../account.html", function( data ) {
  $( "#account" ).html( data );
});

$.get( "../json.html", function( data ) {
  $( "#json" ).html( data );
});
