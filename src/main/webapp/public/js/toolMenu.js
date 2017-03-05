/*Скрипт работы панели "Инструменты"*/
var name = "#floatMenu";
var menuYloc = null;

	$(document).ready(function(){
		menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
		$(window).scroll(function () { 
			offset = menuYloc+$(document).scrollTop()+"px";
			$(name).animate({top:offset},{duration:500,queue:false});
		});
	});
	 $(function() {
		    $( "#floatMenu").draggable();
		  });

	$(function() {
		    $( "#tabs").tabs();
		  });
	 $(function() {
		    $( "#accordion" ).accordion();
		  });