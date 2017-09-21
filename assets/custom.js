$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll >= 300){
    $("nav").addClass("dark-nav");
  }else{
    $("nav").removeClass("dark-nav");
  }
})
