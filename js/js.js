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
	
       
})
