$(function(){
    var totalItems = $('.testimonial-carousel .carousel-item').length;
    var currentIndex = $('.testimonial-carousel .carousel-item.active').index() + 1;
    $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');

    $('#testimonial-carousel').carousel({
      interval: 2000
    });

    $('#testimonial-carousel').bind('slid', function() {
      console.log('hello');
      currentIndex = $('.testimonial-carousel .carousel-item.active').index() + 1;
      $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');
    });


  });