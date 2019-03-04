$(document).ready(function(){
    $(".hamburger").click(function(){
        $("nav").animate({left: '250px'});
    });
      $(".close").click(function(){
        $("nav").animate({left: '-450px'});
    });
});