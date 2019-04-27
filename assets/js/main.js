(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		
		$('.main-menu').slicknav();
		


		$('.view').magnificPopup({
		  type: 'image',
		   gallery:{
			enabled:true
		  }
		});
	
	
	$(".counter span").counterUp({
		delay: 10,
		time: 5000
		
	});
	
	
	$(".works-menu li").on("click", function() {
			
		$(".works-menu li").removeClass("active");
		$(this).addClass("active");
		
		var selector = $(this).attr("data-filter");
		$(".single-work-area").isotope({
			filter:selector
		});
	});
	
	
	
	$(".header-top-area").sticky({topSpacing:0});
	
	
	
	$(function() {
	 $('html').smoothScroll(1000);
	});
	
	
	
	     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
	
	
	
	
	
	

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	