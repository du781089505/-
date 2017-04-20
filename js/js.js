$(function(){
	//导航
	$('.nav ul li').bind('mouseenter', function () {
                $(this).find('.nav-er').show();
            });

            $('.nav ul li').bind('mouseleave', function () {
                $(this).find('.nav-er').hide();

            });
            $('.wwnavdrop').bind('mouseenter', function () {

				if($(this).find('ul li').length == 0){
				    $(this).find('.wwnavdroplist').hide()
				}else{
					 $(this).find('.wwnavdroplist').show();	
				}
            });
           
             $('.wwnavdrop').bind('mouseleave', function () {
                $(this).find('.wwnavdroplist').hide();

            }); 
            //三级导航
            if($('.wwnavdrop').find('.wwnavdroplist').lengths > 0){
				
				
            $('.wwnavdrop').bind('mouseenter', function () {

                $(this).find('.wwnavdroplist').show();
            });	
					
			}
	
         if ($(".wwindexbanner").length > 0) {
        var mySwiper = new Swiper('.wwindexbanner', {
            loop: true,
            autoplay: 5000,
            speed: 1000,
            pagination: '.wwindexbannerbtn',
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            grabCursor: false,
            parallax: true

        });

    };
     var swiper = new Swiper('.wwinnoleftdiv', {
        pagination: '',
        nextButton: '.wwinnoleftdiv .wwinprodivright',
        prevButton: '.wwinnoleftdiv .wwinprodivleft',
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 0,
		autoplay:3000,
		autoplayDisableOnInteraction:false,
        breakpoints: {
            991: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }

        }
    });
})
