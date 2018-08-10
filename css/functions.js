(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



  let position = $(window).scrollTop();

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    {
      if (scroll > position) {
        document.getElementById("top-navigation").style.transform = "translateY(-50rem)";
      } else {
        document.getElementById("top-navigation").style.transform = "translateY(0)";
      }
    }
    else {
      document.getElementById("top-navigation").style.transform = "translateY(-50rem)";
    }
    position = scroll;
  });

  window.sr = ScrollReveal({reset: false});
  sr.reveal('.composition', {
    duration: 1000,
    scale: 0.3,
    delay: 500
  }, 200);
  sr.reveal('.sr__archintel', {
    duration: 2000,
    origin: 'left'
  }, 200);
  sr.reveal('.sr__4x24', {
    duration: 2000,
    origin: 'right'
  }, 200);


})(jQuery); // End of use strict
