// Views
$.get( "../splash.html", function( data ) {
  $( "#splash" ).html( data );
});

// Tabs
$.get( "../tabs/add-story-tab.html", function( data ) {
  $( "#add-story-tab" ).append( data );
});
