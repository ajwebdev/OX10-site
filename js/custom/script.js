$(document).ready(function(){       
  var url = window.location.href;

  if(url.includes('ox10-about-us-wrap')){
    $('.nav-link').removeClass("active");  
    $('#about').addClass("active");
  }
});

$('.nav-link').click(function(){
  var value = ($(this).attr('value'));
  if(value === 'about'){
    $('.nav-link').removeClass("active");  
    $(this).addClass("active");
  }
});

$(function(){
  var totalItems = $('.testimonial-carousel .carousel-item').length;
  var currentIndex = $('.testimonial-carousel .carousel-item.active').index();
  $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');

  $('#testimonial-carousel').carousel({
    interval: 2000
  })

  $('#testimonial-carousel').on('slide.bs.carousel', function() {
    console.log('hello');

    currentIndex = $('.testimonial-carousel .carousel-item.active').index();
    console.log("Total Items:", totalItems);
    console.log("CurrentIndex:",currentIndex);
    $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');
  });


});

/* About us - scroll count increase */
var a = 0;
$(window).scroll(function() {
  var nav = $('#ox10-about-us-counter');
  if (nav.length) {
    var oTop = nav.offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.ox10-count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 3000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum) + "+");
            },
            complete: function() {
              $this.text(this.countNum + "+");
              //alert('finished');
            }

          });
      });
      a = 1;
    }
  }

});