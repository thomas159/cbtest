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







// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});

// (function() {

//   "use strict";

//   var toggles = document.querySelectorAll(".c-hamburger");

//   for (var i = toggles.length - 1; i >= 0; i--) {
//     var toggle = toggles[i];
//     toggleHandler(toggle);
//   };

//   function toggleHandler(toggle) {
//     toggle.addEventListener( "click", function(e) {
//       e.preventDefault();
//       (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//     });
//   }

// })();