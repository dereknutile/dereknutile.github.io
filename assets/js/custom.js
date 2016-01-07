$(document).ready(function(){

  // var text = $(".swap-text");
  // var textIndex = -1;
  //
  // function swapText() {
  //   ++textIndex;
  //   text.eq(textIndex % text.length)
  //     .fadeIn(1400)
  //     .delay(1600)
  //     .fadeOut(900, swapText);
  // }
  //
  // swapText();

   $('input#filter-skills').quicksearch('.skills-row');

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
});
