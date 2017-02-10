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

//Menu
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

// Изменение активного пункта меню при прокрутке страницы
var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
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