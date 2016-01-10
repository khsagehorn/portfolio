$( document ).ready(function(){
  $ ( "#from" ).click(function(){
     $("#fromtext").slideDown("slow");
    // console.log('clicked');
  });
  $ ( "#deal" ).click(function(){
     $("#dealtext").slideDown("slow");
     $("#continue").delay( 800 ).fadeIn( 400 );
    // console.log('clicked');
  });
  $ ("#nexttext").slideDown("slow");

});