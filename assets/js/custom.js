(function($){
   	
    // Preloader 	 
   	$(window).load(function() { 
       	$('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
        $('#countdown').addClass('animated bounceInDown');  
    }); 

	$(document).ready(function() {

        // Animation scroll
		$('a[href*=#]').bind('click', function(e) {
			var anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 500);
			e.preventDefault();
		});

        // Background slideshow
        $.backstretch([
            'assets/images/festival2.png', 
            'assets/images/festival_outfits3.png', 
            'assets/images/fifi-brindacier-fume.jpg'
        ], {duration: 5000, fade: 750});

        // Countdown
		$('#countdown').countdown('2017/04/15 14:00:00', function(event) {	// your date here 
        	$(this).html(event.strftime(''
            	+ '<div><div>%D</div><i>Days</i></div>' 
            	+ '<div><div>%H</div><i>Hours</i></div>'
            	+ '<div><div>%M</div><i>Minutes</i></div>'
            	+ '<div><div>%S</div><i>Seconds</i></div>'
        	));
    	});

        // Google Map 
        map = new GMaps({
            el: '#map',
            scrollwheel: false,
            lat: 50.647151,
            lng: 5.566481,
        });

        map.addMarker({
            lat: 50.647151,
            lng: 5.566481,
            title: 'Tricksters',
            infoWindow: {
                content: '<p><strong>Tricksters</strong><br/> Thats us! </p>'
            }
        });

	});

})(jQuery);
