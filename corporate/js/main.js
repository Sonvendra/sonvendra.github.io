
		$('#workCarousel').carousel({
				interval: 5000
		});
		
		$('#teamCarousel').carousel({
				interval: 5000
		});
		
	
$(window).scroll(function(){
		var top	= $(window).scrollTop();
		if(top>=60){
			$("header").addClass('header-bg');
		}

		else
			if($("header").hasClass('header-bg')){
				$("header").removeClass('header-bg');
			}
	});		
	
	
	//smooth scroll

	/*$(document).on('click', 'a[href^="#"]', function (event){
		
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
	});*/
