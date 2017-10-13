console.log('script.js works!');

$.get( "../view1.html", function( data ) {
  $( "#view-1" ).html( data );
});

$.get( "../view2.html", function( data ) {
  $( "#view-2" ).html( data );
});

$.get( "../view3.html", function( data ) {
  $( "#view-3" ).html( data );
});

$.get( "../view4.html", function( data ) {
  $( "#view-4" ).html( data );
});
