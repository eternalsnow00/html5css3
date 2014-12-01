var images=["img/1-1.png","img/1-2.png","img/1-3.png","img/1-4.png","img/2-1.png","img/2-2.png","img/2-3.png","img/2-4.png","img/3-1.png","img/3-2.png","img/3-3.png","img/3-4.png","img/3-5.png","img/4-1.png","img/4-2.png","img/4-3.png","img/4-4.png","img/4-5.png","img/4-6.png","img/5-1.png","img/5-2.png","img/5-3.png","img/7-1.png","img/7-2.png","img/sprite.png","img/upBnt.png"];
var length = images.length;
var num = 1;
var imgs=function(src){
	var img = new Image(); 
	img.onload=function(){
		document.getElementById("kjls").innerHTML=(parseInt((num/length)*100)+"%");
		num++;
	};
	img.src=src;
}
for(var i = 0 ; i< length ;i++){
	imgs(images[i]);
}
window.onload=function(){
	setTimeout(function(){
		$(".section0").addClass('secBlock');
		$(".itemnav").eq(0).css('display','block');
		$(".commonSEC").css({width:$(window).width(),height:$(window).height()});
		$(".loading").css("display","none");
		$(".container").css({"width":($(".commonSEC").length-1)*$(window).height(),"display":"block"});
	},2000);

	$('.container').on('touchstart', function(){ 
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
			var index=$(".itemnav").index(this)+1;
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
			var index=$(".itemnav").index(this)-1;
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

	$(".item2_5,.item7_3").on("tap",function(){
		$(".right_2").animate({"left":"0px"},250, 'ease-out');
	});
	$(".job_arrow").on("tap",function(){
		$(".right_2").animate({"left":"100%"},250, 'ease-out');
	});
}
