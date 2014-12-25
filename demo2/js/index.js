if ("ontouchstart" in document) {
	var touchstart = "touchstart",
		touchend = "touchend",
		touchmove = "touchmove",
		tap = "tap"
} else {
	var touchstart = "mousedown",
		touchend = "mouseup",
		touchmove = "mousemove",
		tap = "click"
}
var TOUCH = "stop";
document.body.addEventListener(touchstart, function(e) {
		e.preventDefault();
		TOUCH = "start";
		if ("touchstart" == touchstart) {
			touchStartX = e.touches[0].pageX;
	  		touchStartY= e.touches[0].pageY;
		}else{
			touchStartX = e.pageX;
	  		touchStartY= e.pageY;
		}
	},false);

document.body.addEventListener(touchmove, function(e) {
	e.preventDefault();
	if(TOUCH != "start"){
		return;
	}
	if ("touchmove" == touchmove) {
		touchmoveX = e.touches[0].pageX;
		touchmoveY = e.touches[0].pageY;
		absX = touchmoveX-touchStartX;
  		absY = touchmoveY-touchStartY;
	}else{
		touchmoveX = e.pageX;
		touchmoveY = e.pageY;
		absX = e.pageX-touchStartX;
  		absY = e.pageY-touchStartY;
	}
},false);

document.body.addEventListener(touchend,function(e){
	e.preventDefault();
	Touch = "stop";
});

$(".commonSEC").on(touchend,function(){
	if(touchmoveY == 0 || touchmoveX == 0 || !touchmoveY || !touchmoveX){
		return;
	}
	if(Math.abs(absY)>100){
		if(absY<0){
			var index=$(".commonSEC").index(this)+1;
		}else{
			var index=$(".commonSEC").index(this)-1;
		}
		if(index<0 || index>5){
			return;
		}else{
			$(this).animate({
				'-webkit-transform':"scale(0.4)",'transform':"scale(0.4)","opacity":"0.4"
			},500,'ease-out',function(){
				$(this).children().css("display","none");
				$(this).css({'-webkit-transform':"scale(1)",'transform':"scale(1)","opacity":"1"});
			});
			$(".container").animate({
		  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px) "
			}, 500, 'ease-out',function(){
				$(".itemnav").eq(index).css("display","block");
			});
			$(".right_2").css({"left":"100%"});
		}
	}
	if($(this).find("*").hasClass('left_2')){
		if(Math.abs(absX)>60){
			if(absX>0){
				$(this).find(".right_2").animate({"left":"100%"},250, 'ease-out');
			}else{
				$(this).find(".right_2").animate({"left":"0px"},250, 'ease-out');
			}
		}
	}
	touchmoveX = 0;
	touchmoveY = 0;
	touchStartX = 0;
	touchStartX = 0;
});
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

window.onresize = function(){
	$(".commonSEC").css({width:$(window).width(),height:$(window).height()});
	$(".container").css({"width":($(".commonSEC").length-1)*$(window).height(),"display":"block"});
}
window.onload = function(){
	$(".itemnav").eq(0).css('display','block');
	$(".commonSEC").css({width:$(window).width(),height:$(window).height()});
	//alert($(window).width());
	$(".loading").css("display","none");
	$(".container").css({"width":($(".commonSEC").length-1)*$(window).height(),"display":"block"});

	$(".item2_5,.item7_3").on(tap,function(){
		$(".right_2").animate({"left":"0px"},250, 'ease-out');
	});
	$(".job_arrow").on(tap,function(){
		$(".right_2").animate({"left":"100%"},250, 'ease-out');
	});
}
