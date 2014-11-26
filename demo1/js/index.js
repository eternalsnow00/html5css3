window.onload=function(){
	$(".commonSEC").css({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});
	//alert(document.documentElement.clientWidth+","+document.documentElement.clientHeight);
	$(".container").css({"width":($(".commonSEC").length-1)*$(window).height()});
	setTimeout(function(){
		$(".section0").addClass('secBlock');
		$(".itemnav").eq(0).css('display','block');
	},2000);

	$('.container').on('touchstart', function(e){ 
		e.preventDefault();
	  	fingerFirsrtX = e.touches[0].pageX;
	  	fingerFirsrtY = e.touches[0].pageY;
	});

	$('.itemnav').on('touchmove', function(e){
		e.preventDefault();
	  	fingerX = e.touches[0].pageX;
	  	fingerY = e.touches[0].pageY;
	});

	$('.itemnav').on('touchend', function(e){
		if(fingerY-fingerFirsrtY<-100){
			var index=Number($(this).attr("data-index"))+1;
			if(index<$(".itemnav").length){
				$(this).css("display","none");
				$(".container").animate({
			  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px)"
				}, 800, 'ease-out',function(){
					$(".itemnav").eq(index).css("display","block");
				});
				translateY =-$(window).height()*index;
			}												
		}else if(fingerY-fingerFirsrtY>100){				
			var index=Number($(this).attr("data-index"))-1;
			if(index>=0){
				$(this).css("display","none");
				$(".container").animate({
			  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px)"
				}, 800, 'ease-out',function(){
					$(".itemnav").eq(index).css("display","block");
				});
				translateY =-$(window).height()*index;
			}									
		}
	});
	$('.timelong').on('tap', function(){
		$("#itemnavlist4_3_1").css("display","block");
		$("#itemnavlist4_3_2").css("display","none");
	});
	$('.oclock').on('tap', function(){
		$("#itemnavlist4_3_2").css("display","block");
		$("#itemnavlist4_3_1").css("display","none");
	});
};