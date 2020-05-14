/* global $, alert, console */


/******************************
	[ TABLE OF Contents ]
		1- Navbar Links
		2- Carousel 
		3- Portfolio
		4- Scroll up
		5- Preloader
******************************/

$(document).ready(function (){

	'use strict';
	
/*** 1- activate navbar links ***/
	
	$(".nav-item").on("click", function (){
		$(this).addClass("active").siblings().removeClass("active");
		$("html,body").animate({
			scrollTop : $('#' + $(this).data('value')).offset().top - 200
		},1500);
	});
	$(".navbar-toggler,.nav-item").on("click", function(){
		$(".navbar-collapse").slideToggle(500);
	});
	

/*** 2- Adjusting carousel place ***/

	$(".carousel-item").css("height",$(window).height() - $("header").height());

    $(".carousel-caption").css("marginBottom",$(".carousel-item").height() / 2 - 250 );


/*** 3- Portfolio ***/

	/* mixitup */
	mixitup($(".grid"));
	
	/* button is-checked */
	$(".filters button").on("click", function (){
		$(this).addClass("is-checked").siblings().removeClass("is-checked");
	});


/*** 4- Scroll Up ***/

	$('.scrollUp').on("click",function () {
		$("html, body").animate({scrollTop: 0}, 2000);
	});
	
	
/*** 5- Preloader ***/

	$(window).load(function () {
		$("#loading").fadeOut(500);
	});


});