$(function(){
    var totalItems = $('.testmonial-carousel .carousel-item').length;
    var currentIndex = $('.testmonial-carousel .carousel-item.active').index() + 1;
    $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');

    $('#testmonial-carousel').carousel({
      interval: 2000
    });

    $('#testmonial-carousel').bind('slid', function() {
      console.log('hello');
      currentIndex = $('.testmonial-carousel .carousel-item.active').index() + 1;
      $('.ox10-carousel-count').html('' + currentIndex + '/' + totalItems + '');
    });


    var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#project-container", 0.5, {z: -150})		// move back in 3D space
			.to("#project-container", 1,   {x: "-25%"})	// move in to first panel
			.to("#project-container", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
			.to("#project-container", 0.5, {z: -150, delay: 1})
			.to("#project-container", 1,   {x: "-50%"})
			.to("#project-container", 0.5, {z: 0})
			// animate to forth panel
			.to("#project-container", 0.5, {z: -150, delay: 1})
			.to("#project-container", 1,   {x: "-75%"})
			.to("#project-container", 0.5, {z: 0});

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#project-wrap",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#project-wrap")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
  })