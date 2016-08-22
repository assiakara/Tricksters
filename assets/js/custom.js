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
            'assets/images/IMG_0097.jpg_effected.jpg', 
            'assets/images/IMG_0116.jpg', 
            'assets/images/IMG_0127.jpg_effected.jpg',
            'assets/images/IMG_0148.jpg',
            'assets/images/IMG_0213.jpg_effected.jpg',
        ], {duration: 5000, fade: 750});

        // Countdown
		$('#countdown').countdown('2016/10/15 14:00:00', function(event) {	// your date here 
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
