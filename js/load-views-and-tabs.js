// Views
$.get( "../login.html", function( data ) {
  $( "#login" ).html( data );
});

// Tabs
$.get( "../tabs/add-story-tab.html", function( data ) {
  $( "#add-story-tab" ).append( data );
});
