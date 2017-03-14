 		/* ---------------------------------------------- /*
		 * Home BG
		 /* ---------------------------------------------- */

		 $(".screen-height").height($(window).height());

		 $(window).resize(function(){
		 	$(".screen-height").height($(window).height());
		 });

		 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		 	$('#home').css({'background-attachment': 'scroll'});
		 } else {
		 	$('#home').parallax('50%', 0.1);
		 }

		/* ---------------------------------------------- /*
		 * Navbar
		 /* ---------------------------------------------- */

		 $('.header').sticky({
		 	topSpacing: 0
		 });

		 $('body').scrollspy({
		 	target: '.navbar-custom',
		 	offset: 70
		 });

		/* ---------------------------------------------- /*
		 * Navbar Right
		 /* ---------------------------------------------- */
		 // (function($){
		 // 	$(window).load(function(){

		 // 		$("body").mCustomScrollbar({
		 // 			theme:"dark-thin"
		 // 		});

		 // 	});
		 // })(jQuery);

		 /* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

