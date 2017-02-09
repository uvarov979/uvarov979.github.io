/* jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>641){
	                $('#navigation').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<641){
	                $('#navigation').removeClass('fixed');
	            }
	        });
	    });*/

$(document).ready(function(){

        var $menu = $("#navigation");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 659 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 659 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });



// Плавный переход по сылкам.
$(document).ready(function(){
	$("#links").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//Фиксированная кнопка вверх.
$(document).ready(function(){
// hide #back-top first
$("#back-top").hide();
 
// fade in #back-top
$(function () {
$(window).scroll(function () {
if ($(this).scrollTop() > 600) {
$('#back-top').fadeIn();
} else {
$('#back-top').fadeOut();
}
});
// scroll body to 0px on click
$('#back-top a').click(function () {
$('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
});