$(document).ready(function() {
  $(".hamburger").click(function() { 
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
$(".hamburger").removeClass("is-active");
}); 

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

// Smooth Scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});