var timerStart = Date.now();
$(document).ready(function() {
	$(".loading").css({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});
	console.log("Time until DOMready: ", Date.now()-timerStart);
});
window.onload=function(){
	var images=["img/1-1.png","img/1-2.png","img/1-3.png","img/1-4.png","img/2-1.png","img/2-2.png","img/2-3.png","img/2-4.png","img/3-1.png","img/3-2.png","img/3-3.png","img/3-4.png","img/3-5.png"];
	var length = images.length;
	for (i = 0; i < length; ++i) {
    	images[i] = new Image();
    	images[i].src = images[i];
  	}
	console.log("Time until everything loaded: ", Date.now()-timerStart);
	$(".loading").css("display","none");
	$(".commonSEC").css({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight});
	$(".container").css({"width":($(".commonSEC").length-1)*$(window).height(),"display":"block"});
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
				}, 500, 'ease-out',function(){
					$(".itemnav").eq(index).css("display","block");
				});
				$(".right_2").css({"left":"100%"});
			}												
		}else if(fingerY-fingerFirsrtY>100){				
			var index=Number($(this).attr("data-index"))-1;
			if(index>=0){
				$(this).css("display","none");
				$(".container").animate({
			  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px)"
				}, 500, 'ease-out',function(){
					$(".itemnav").eq(index).css("display","block");
				});
				$(".right_2").css({"left":"100%"});
			}							
		}
		if($(".itemnav").children().hasClass('left_2')){
			if(fingerX-fingerFirsrtX<-60){
				$(this).find(".right_2").animate({"left":"0px"},250, 'ease-out');
			}else if(fingerX-fingerFirsrtX>60){
				$(this).find(".right_2").animate({"left":"100%"},250, 'ease-out');
			}
		}
	});

	$(".item2_5").on("tap",function(){
		$(".right_2").animate({"left":"0px"},250, 'ease-out');
	});
	$(".job_arrow").on("tap",function(){
		$(".right_2").animate({"left":"100%"},250, 'ease-out');
	});
};