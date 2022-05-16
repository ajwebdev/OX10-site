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