$(document).ready(function(){
	$('.header-nav li:nth-child(1) a').css({color:'rgb(53, 181, 88)'});
	$('.header-nav li:nth-child(2)').hover(function() {
		$(this).children('.school-list').show();
	}, function() {
		$(this).children('.school-list').hide();
	});
	$('.header-nav li:nth-child(3)').hover(function() {
		$('.vip-list').show();
	}, function() {
		$('.vip-list').hide();
	});
	$('.header-nav li:nth-child(4)').hover(function() {
		$('.shequ-list').show();
	}, function() {
		$('.shequ-list').hide();
	});
	$('.login-icon').hover(function() {
		$('.login-icon-down').show();
	}, function() {
		$('.login-icon-down').hide();
	});
	$('.login-icon-down').hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});


});