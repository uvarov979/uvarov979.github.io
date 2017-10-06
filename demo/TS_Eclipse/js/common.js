"use strict"

$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

		//Headhesive
	if( window.innerWidth >= 1200 ){
		var options = {
			offset: 1000
		}
		var header = new Headhesive('.menu-line', options);
	} else {
      console.log('good');
    }

	 //Toggle-button
	 $(".toggle-btn").click(function() {
	 	$(this).toggleClass("is-active");
	 	$(".menu-line").slideToggle();
	 	return false;
	 });

	//Button-top
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}
		else 
			$('.top').removeClass('active');
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	// Modal-window
	$('a.openModal').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
			function(){ 
				$('#modal_form') 
				.css('display', 'block')
				.animate({opacity: 1, top: '15%'}, 200); 
			});
	});

	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
		.animate({opacity: 0, top: '45%'}, 200, 
			function(){ 
				$(this).css('display', 'none'); 
				$('#overlay').fadeOut(400); 
			}
			);
	});

	// Carousel Offer
	$('.carousel-offer').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		dots: true
	});

		// Carousel Offer
		$('.carousel-translation').owlCarousel({
			loop: true,
			items: 1,
			smartSpeed: 700,
			nav: false,
			dots: true
		});

   // Carousel staff 
   $('.carousel-staff').owlCarousel({
   	loop: true,
   	nav: true,
   	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   	smartSpeed: 700,
   	responsiveClass: true,
   	dots: false,
   	responsive: {
   		0: {
   			items: 1
   		},
   		700: {
   			items: 2
   		},
   		1100: {
   			items: 4
   		}
   	}
   });

      // Carousel review 
   $('.carousel-review').owlCarousel({
   	loop: true,
   	nav: true,
   	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
   	smartSpeed: 700,
   	responsiveClass: true,
   	dots: false,
   	responsive: {
   		0: {
   			items: 1
   		},
   		700: {
   			items: 2
   		},
   		1100: {
   			items: 4
   		}
   	}
   });

//masonry
var sizer = '.sizer4';

var container = $('#gallery');

container.imagesLoaded(function(){
	container.masonry({
		itemSelector: '.item-masonry',
		columnWidth: sizer,
		percentPosition: true
	});

$('.carousel-review .carousel-review-item').equalHeights();

});

/*$('.item-masonry').hover(
	function(){
		$(this).find(".cover-item-gallery").fadeIn();
	},
	function(){
		$(this).find(".cover-item-gallery").fadeOut();
	}
	)*/;

});

//Preloader
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

$(window).resize(function () {
	if ($(window).width() < 768) {
		$('.home .container').removeClass('padding-null');
	} else {
		$('.home .container').addClass('padding-null');
	}

	if ($(window).width() < 992) {
		$('.menu-line .container').removeClass('container');
	} else {
		$('.menu-line > div').addClass('container');
	}

});

	//ResizeWiindow
	function onResize() {
		$('.analysis .graphics p').equalHeights();
	}onResize();
	window.onresize = function() {onResize()}


