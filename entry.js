define(["jquery","com/carousel","com/gotop","com/exposure","com/waterfall","com/ajax"],function($,Carousel,GoTop,Exposure,WaterFall,Ajax){
	
	$(".carousel").each(function(){
		 new Carousel($(this));
	 })

	GoTop.init();

	Exposure.one($('.about-ul>li'), function(){
		var $this = $(this);
		$this.css({"opacity":"1"});
	 });

	WaterFall.init($('.portfolio ul'));

	Ajax.init($(".load"));

		var navArr=['.nav-service a' ,'.nav-portfolio a','.nav-about a','.nav-team a','.nav-contact a'],
		contentArr=['.service' ,'.portfolio','.about','.team','.contact'];

	$(window).on('scroll',function(){
		for(var i=0; i<navArr.length; i++){
			$(navArr[i]).removeClass('nav-active');
			if(halfVisible($(contentArr[i]))){
				$(navArr[i]).addClass('nav-active');
			}
		}
		if($(window).scrollTop()>0){
			$(".slide").on('mouseenter',function(){
				$('.nav').slideDown();
		})
			$('.nav').slideUp();
		}else{
			$('.nav').slideDown();
		}
	})


	function halfVisible($target){
		var winH=$(window).height(),
		    scrollTop=$(window).scrollTop(),
		    offsetTop=$target.offset().top,
		    $targetH=$target.outerHeight(true);
		return ((scrollTop+winH/2>=offsetTop)&&(offsetTop+$targetH>scrollTop+winH/2))
	}


	for(var i=0; i<navArr.length; i++){
			(function(i){
				$(navArr[i]).on('click',function(){
					$('html,body').animate({scrollTop: $(contentArr[i]).offset().top}, 800);
				})
			})(i)
		}


})






	



	



	

	
