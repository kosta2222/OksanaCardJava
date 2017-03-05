/*
 * my first jQuery plugin
 * freeden_codomaza@mail.ru 21.08.2013
 * 
 */

(function( $ ){
  $.fn.obSlider = function() {
   
    
	var methods = {
		init : function () {},
		slide: function (step) { 
		$(".carousel_ul").find("img").each(function () {
			var temp_src = $(this).attr("src");
			var re = /(thumb_)\d+/;
			var picNum = (temp_src.match(re).toString().match(/\d+/))*1;
			var nextPicNum = picNum + step*1;
			if (nextPicNum > 27 ) {nextPicNum -= 27;}
			if (nextPicNum < 1 ) {nextPicNum += 27;}
 			
				
			$(this).attr("src","image/thumb_" + nextPicNum + ".jpg");
			var temp_alt = $(this).attr("alt")*1;
			$(this).attr("alt", nextPicNum);
		});
		},
		
		zoom : function () { $(".carousel_ul img").each(function () {
			$(this).click(function () {
				var temp_src = $(this).attr("src");
				$("#temp_img").attr("src",temp_src);
				
			})
		})}//to think
			
	};
	methods.zoom();
	methods.init();
	
	this.find(".prev").click(function () {
		methods.slide(-9);
	});
	this.find(".next").click(function () {
		methods.slide(9);
	});
	
 
  };
})( jQuery );