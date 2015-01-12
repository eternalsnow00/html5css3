if("ontouchstart" in document){
	var touchstart = "touchstart",
		touchend = "touchend",
		touchmove = "touchmove",
		tap = "tap"
}else{
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
	if(TOUCH == "start"){
		if ("touchmove" == touchmove) {
			touchmoveX = e.touches[0].pageX;
			touchmoveY = e.touches[0].pageY;
			absX = Math.abs(touchmoveX-touchStartX);
	  		absY = Math.abs(touchmoveY-touchStartY);
		}else{
			touchmoveX = e.pageX;
			touchmoveY = e.pageY;
			absX = Math.abs(e.pageX-touchStartX);
	  		absY = Math.abs(e.pageY-touchStartY);
		}
	}
},false);

document.body.addEventListener(touchend,function(e){
	e.preventDefault();
	TOUCH = "stop";
});

$(".commonBlock").on(touchend,function(){
	if(touchmoveY == 0 || touchmoveX == 0 || !touchmoveY || !touchmoveX){
		return;
	}
	if(absY>100){
		var direction =  touchmoveY-touchStartY>100? "down":"up";
		if(direction === "up"){
			var index=$(".commonBlock").index(this)+1;
		}else{
			var index=$(".commonBlock").index(this)-1;
		}
		if(index<0||index>=length){
			return;
		}
		$(this).animate({
				'-webkit-transform':"scale(0.4)",'transform':"scale(0.4)","opacity":"0.4"
			},800,'ease-out',function(){
				$(this).children().css("display","none");
				$(this).css({'-webkit-transform':"scale(1)",'transform':"scale(1)","opacity":"1"});
		});
		$(".container").animate({
	  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px) "
		}, 800, 'ease-out',function(){
			$(".itemnav").eq(index).css("display","block");
		});
	}
	touchmoveX = 0;
	touchmoveY = 0;
});

var images=["img/1-1.png"];
var length = images.length;
var num = 1;
var imgs=function(src){
	var img = new Image(); 
	img.onload=function(){
		document.getElementById("percent").innerHTML=(parseInt((num/length)*100)+"%");
		num++;
	};
	img.src=src;
}
for(var i = 0 ; i< length ;i++){
	imgs(images[i]);
}

window.onresize = function(){
	calculator();
}
window.onload = function(){
	calculator();
	setTimeout( function(){
		document.getElementById("loading").style.display="none";
		document.getElementById("container").style.display="block"
		document.getElementsByClassName("itemnav")[0].style.display="block";
	},1000)
}

function calculator(){
	documentWidth = window.innerWidth;
	documentHeight = window.innerHeight;
	length = document.getElementsByClassName("commonBlock").length;
	$(".commonBlock").css({width:documentWidth,height:documentHeight});
	document.getElementById("container").style.width= documentWidth+"px";
	document.getElementById("container").style.height=documentHeight*length+"px";
}
