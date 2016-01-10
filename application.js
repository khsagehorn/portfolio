$( document ).ready(function(){
  $ ("section img").click(function(){
     $("p:first").slideDown("slow");
  });
  $ ( "section img:last" ).click(function(){
     $("p:last").slideDown("slow");
     $("form").delay( 800 ).fadeIn( 400 );
    // console.log('clicked');
  });
  // $ ("p:last").slideDown("slow");

});