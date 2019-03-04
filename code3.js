$(document).ready(function(){
    $(".hamburger").click(function(){
        $("nav").animate({top: '250px'});
    });
      $(".close").click(function(){
        $("nav").animate({top: '-450px'});
    });
});