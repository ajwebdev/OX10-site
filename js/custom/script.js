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

  $('#testimonial-carousel').on('slide.bs.carousel', function() {
    setTimeout(function(){ 
     currentIndex = $('.testimonial-carousel .carousel-item.active').index() + 1;
     $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');
      },900);
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

$('.ox10-menu-button').click(function(){
  $('#navbarText').show();
  document.getElementById("navbarText").style.height = "100%";
  document.getElementById("navbarText").style.width = "100%";
  document.getElementById("carouselExampleIndicators").style.visibility = "hidden";
});

// $('.closebtn').click(function(){
//   $('#navbarText').hide();
//   document.getElementById("carouselExampleIndicators").style.visibility = "visible";
// });

function closeNav() {
  console.log('bye');
  document.getElementById("navbarText").style.height = "0";
  document.getElementById("navbarText").style.width = "0";
  document.getElementById("carouselExampleIndicators").style.visibility = "visible";
}