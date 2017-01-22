$(document).ready(function() {
  $(".border-menu").click(function() { 
    $('#menubar').toggleClass("hide");//toggle this class
    $('.nav').addClass("white");//toggle this class
     $('.close').toggleClass("hide");//toggle this class
     $(".border-menu").addClass("hide");

  });
});
$(document).ready(function() {
  $(".close").click(function() { 
    $('#menubar').addClass("hide");//toggle this class
    $('.nav').removeClass("white");//toggle this class
     $('.close').addClass("hide");//toggle this class
     $(".border-menu").removeClass("hide");

  });
});
// add white to menu bar
$(".cell").click(function(){
$("#menubar").addClass("hide");
$('.close').addClass("hide");//toggle this class
$('.nav').removeClass("white");//toggle this class
$(".c-hamburger").removeClass("hide");
}); 
