$(document).ready(function(){
	var loc = window.location.host;
	loc = loc.replace('www.','');
	$("#captcha-image").attr('src', 'http://api.'+loc+'/captcha');
	$("#reg").attr('action', 'http://api.'+loc+'/v-2/client-register');
	$("#client-login-link").attr('href', 'http://cpanel.'+loc+'/');
	$("#contact-us").attr('action', 'http://api.'+loc+'/v-2/contact-form');
});


$(function() {
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if(results) {
			return results[1] || 0;
		}
		return '';
	}
	
	$('#api-public-ticket form input').each(function(){
		var v = $.urlParam($(this).attr('name'));
		if(v) {
			$(this).val(decodeURIComponent(v.replace(/\+/g, ' ')));
		}
	});

	var err = $.urlParam('error_msg');
	if(err) {
		$('<div class="error">').html(decodeURIComponent(err.replace(/\+/g, ' ')))
		.prependTo('#api-public-ticket');
	}
});


function urldecode(url) {
	return decodeURIComponent(url.replace(/\+/g, ' '));
}


$.urlParam = function(name){
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if(results) {
		return results[1] || 0;
	}
	return '';
}


$(function() {
	$('#reg input').each(function(){
		var v = $.urlParam($(this).attr('name'));
		if(v) {
			$(this).val(urldecode(v));
		}
	});
	var err = $.urlParam('error_msg');
	if(err) {
		$('<div class="error">').html(urldecode(err)).insertBefore('#reg');
	}
});



