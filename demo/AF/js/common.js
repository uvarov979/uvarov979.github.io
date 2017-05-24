$(function() {
	//Preloader
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);

	$('.reset').click(function(){
		$('body').removeClass('loaded');
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 1000);
	});

	
	//mini-menu toggle-mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".nav-line-hidden").slideToggle();
		return false;
	});


//spoylar-table-Schedule

$(".one-l").click(function() {
	$(this).toggleClass("on");
	$(".wrap-inner-s-1").slideToggle();
	/*----------------------------------------------------------*/
	$(".wrap-inner-s-2").slideUp();
	$(".wrap-inner-s-3").slideUp();
	/*----------------------------------------------------------*/
	return false;
});

$(".two-l").click(function() {
	$(this).toggleClass("on");
	$(".wrap-inner-s-2").slideToggle();
	/*----------------------------------------------------------*/
	$(".wrap-inner-s-1").slideUp();
	$(".wrap-inner-s-3").slideUp();
	/*----------------------------------------------------------*/
	return false;
});

$(".thire-l").click(function() {
	$(this).toggleClass("on");
	$(".wrap-inner-s-3").slideToggle();
	/*----------------------------------------------------------*/
	$(".wrap-inner-s-2").slideUp();
	$(".wrap-inner-s-1").slideUp();
	/*----------------------------------------------------------*/
	return false;
});

//Spoylar-About
$(".spoiler-l1").click(function() {
	$(this).toggleClass("on");
	$(".info-spoiler1").slideToggle();
	/*----------------------------------------------------------*/
	$("#info-spol2").slideUp().removeClass("on");
	$("#info-spol3").slideUp().removeClass("on");
	/*----------------------------------------------------------*/
	return false;
});

$(".spoiler-l2").click(function() {
	$(this).toggleClass("on");
	$(".info-spoiler2").slideToggle();
	/*----------------------------------------------------------*/
	$(".info-spoiler1").slideUp().removeClass("on");
	$(".info-spoiler3").slideUp().removeClass("on");
	/*----------------------------------------------------------*/
	return false;
});

$(".spoiler-l3").click(function() {
	$(this).toggleClass("on");
	$(".info-spoiler3").slideToggle();
	/*----------------------------------------------------------*/
	$(".info-spoiler1").slideUp().removeClass("on");
	$(".info-spoiler2").slideUp().removeClass("on");
	/*----------------------------------------------------------*/
	return false;
});

/*Spoiler-Table-Schedule*/
$(".tabel-link1").click(function() {
	$(this).toggleClass("on");
	$(".table-1").slideToggle();
	/*----------------------------------------------------------*/
	$(".table-2").slideUp();
	$(".table-3").slideUp();
	/*----------------------------------------------------------*/
	return false;
});

$(".tabel-link2").click(function() {
	$(this).toggleClass("on");
	$(".table-2").slideToggle();
	/*----------------------------------------------------------*/
	$(".table-1").slideUp();
	$(".table-3").slideUp();
	/*----------------------------------------------------------*/
	return false;
});

$(".tabel-link3").click(function() {
	$(this).toggleClass("on");
	$(".table-3").slideToggle();
	/*----------------------------------------------------------*/
	$(".table-1").slideUp();
	$(".table-2").slideUp();
	/*----------------------------------------------------------*/
	return false;
});
	//Owl-caroudel-Home
	$(".carousel-eq ").owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:1200,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:1,
			}
		}
	});

	//Carousel-Coaches
	$(".carousel-wrap-coaches").owlCarousel({
		loop:true,
		margin:0,
		smartSpeed:1200,
		navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
		responsive:{
			0:{
				items:1,
			},
			864:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});

//Carousel-News
$(".carousel-wrap-news").owlCarousel({
	loop:true,
	margin:0,
	smartSpeed:1200,
	navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
	responsive:{
		0:{
			items:1,
		},
		476:{
			items:2,
		},
		1124:{
			items:3,
		}
	}
});

//Carousel-Partners
$(".carousel-wrap-partners").owlCarousel({
	loop:true,
	margin:0,
	smartSpeed:1200,
	navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
	responsive:{
		0:{
			items:1,
		},
		476:{
			items:2,
		},
		776:{
			items:3,
		},
		1000:{
			items:6,
		}
	}
});

//Carousel-About-players
$(".carousel-wrap-about-players ").owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	autoplay:true,
	autoplayTimeout:5000,
	smartSpeed:1200,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp',
	navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
	responsive:{
		0:{
			items:1,
		},
		600:{
			items:1,
		},
		1000:{
			items:1,
		}
	}
});

//Carousel-about-sections
$(".carousel-wrap-about-sections").owlCarousel({
	loop:true,
	margin:0,
	smartSpeed:1200,
	navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
	responsive:{
		0:{
			items:1,
		},
		476:{
			items:2,
		},
		1124:{
			items:3,
		}
	}
});

	//Carousel-Sponsor Partners Block
	$(".carousel-wrap-sponsors").owlCarousel({
		loop:true,
		margin:0,
		smartSpeed:1200,
		navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});

	//Carousel-Post Blog Block
	$(".post-img-carousel-wrap").owlCarousel({
		loop:true,
		margin:0,
		smartSpeed:1200,
		navText:["<i class='icon-left-arrow'></i>","<i class='icon-right-arrow'></i>"],
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:1,
			},
			1200:{
				items:1,
			}
		}
	});

/* Global variables */
"use strict";
var $document = $(document),
$window = $(window),
plugins = {
	mainSlider: $('#slider'),
	categoryCarousel: $('.category-carousel .container'),
	testimonialsCarousel: $('.testimonials-carousel'),
	brandsCarousel: $('.brands-carousel'),
	textIconCarousel: $('.text-icon-carousel'),
	bulbCarousel: $('.bulb-carousel'),
	gallery: $('#gallery'),
	backToTop: $('.back-to-top'),
	submenu: $('[data-submenu]'),
	isotopeGallery: $('.gallery-isotope'),
	postGallery: $('.blog-isotope'),
	postCarousel: $('.post-carousel'),
	contactForm: $('#contactform'),
	requestForm: $('#requestform'),
	googleMapFooter: $('#footer-map'),
	googleMap: $('#map')
},
shiftMenu = $('#slidemenu, #page-content, body, .navbar, .navbar-header'),
$navbarToggle = $('.navbar-toggle'),
$dropdown = $('.dropdown-submenu, .dropdown');

	// Isotope
	if (plugins.isotopeGallery.length) {
		var $gallery = plugins.isotopeGallery;
		$gallery.imagesLoaded(function () {
			setGallerySize();
		});
		$gallery.isotope({
			itemSelector: '.gallery__item',
			masonry: {
				columnWidth: '.gallery__item:not(.doubleW)'
			}
		});
		isotopeFilters($gallery);
	}

	// Isotope Filters (for gallery)
	function isotopeFilters(gallery) {
		var gallery = $(gallery);
		if (gallery.length) {
			var container = gallery;
			var optionSets = $(".filters-by-category .option-set"),
			optionLinks = optionSets.find("a");
			optionLinks.on('click', function (e) {
				var thisLink = $(this);
				if (thisLink.hasClass("selected")) return false;
				var optionSet = thisLink.parents(".option-set");
				optionSet.find(".selected").removeClass("selected");
				thisLink.addClass("selected");
				var options = {},
				key = optionSet.attr("data-option-key"),
				value = thisLink.attr("data-option-value");
				value = value === "false" ? false : value;
				options[key] = value;
				if (key === "layoutMode" && typeof changeLayoutMode === "function") changeLayoutMode($this, options);
				else {
					container.isotope(options);
					setGallerySize();
				}
				return false
			})
		}
	}

	function setGallerySize() {
		var windowW = window.innerWidth || $window.width(),
		itemsInRow = 1;
		if (windowW > 1199) {
			itemsInRow = 3;
		} else if (windowW > 767) {
			itemsInRow = 3;
		} else if (windowW > 480) {
			itemsInRow = 1;
		}
		var containerW = $('.gallery-W').width(),
		galleryW = containerW / itemsInRow;
		$gallery.find('.gallery__item').each(function () {
			$(this).css({
				width: galleryW + 'px'
			});
		});
		$gallery.isotope('layout');
	}

	// Post Isotope
	if (plugins.postGallery.length) {
		var $postgallery = plugins.postGallery;
		$postgallery.imagesLoaded(function () {
			setPostSize();
		});
		$postgallery.isotope({
			itemSelector: '.blog-post',
			masonry: {
				gutter: 30,
				columnWidth: '.blog-post:not(.doubleW)'
			}
		});
	}

	$('#gallery').imagesLoaded().done( function( instance ) {
		console.log('DONE- Все изображения были УДАЧНО загружены');
	});

	/*magnific-popup*/
	$('.mfp-gallery').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	//Animated
	$(".infoClub-wrap").animated("fadeInLeft");
	$(".infoCommittee-wrap").animated("fadeInRight");
	$(".block-Teams .t-wrap").animated("fadeInUp");
	$(".block-Teams .b-wrap1").animated("bounceInLeft");
	$(".block-Teams .b-wrap2").animated("bounceInLeft");
	$(".block-Teams .b-wrap3").animated("bounceInLeft");
	$(".block-Schedule .col-md-12").animated("flipInX");
	$(".b-wrap-Coaches .text-wrap").animated("fadeInUp");
	$(".b-wrap-Coaches .coaches-animated1").animated("zoomIn");
	$(".b-wrap-Coaches .coaches-animated2").animated("zoomIn");
	$(".b-wrap-Coaches .coaches-animated3").animated("zoomIn");
	$(".block-News .text-wrap").animated("fadeInUp");
	$(".block-News .news-animated1").animated("bounceInLeft");
	$(".block-News .news-animated2").animated("bounceInLeft");
	$(".block-News .news-animated3").animated("bounceInLeft");
	$(".block-Club-Gallery .text-wrap").animated("fadeInUp");
	$(".block-Club-Gallery .filters-by-category").animated("lightSpeedIn");
	$(".block-Club-Gallery .gallery-m").animated("flipInX");
	$(".block-Partners .text-wrap").animated("fadeInUp");
	$(".block-Partners .carousel-wrap-partners").animated("fadeInLeftBig");
	$(".block-Partners .block-wrap-sponsor").animated("zoomInUp");
	$(".block-Partners .block-wrap-sponsor").animated("zoomInUp");
	$(".block-Subscribe .bg-subscribe1 .text-wrap").animated("zoomIn");
	$(".block-Subscribe .bg-subscribe1 .form-wrap").animated("bounceInUp");
	$(".block-Subscribe .subscribe-animated1").animated("zoomInLeft");
	$(".block-Subscribe .subscribe-animated2").animated("zoomInDown");
	$(".block-Subscribe .subscribe-animated3").animated("zoomInRight");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


