$( document ).ready(function(){
  $ ( "#from" ).click(function(){
     $("#fromtext").slideDown("slow");
    // console.log('clicked');
  });
  $ ( "#deal" ).click(function(){
     $("#dealtext").slideDown("slow");
     $("#continue").show();
    // console.log('clicked');
  });

});