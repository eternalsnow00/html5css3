var myApp=angular.module('myApp', ['ngCookies','ngTouch']);
var images=["img/bg.png","img/more.png"];
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
myApp.controller('cookieCtr',['$scope','$cookies','$cookieStore', function($scope,$cookies,$cookieStore) {
	if($cookieStore.get('language')){
		$scope.usingCookieStore = $cookieStore.get('language').lang;
	}else{
		$cookieStore.put('language',{'lang':0});
		$scope.usingCookieStore = 0;
	}
	var display = false;
    $scope.isChange = function(x){
    	if($scope.usingCookieStore == x) {
    		$.each(['lang', 'lay'], function(index, item){
		  		$("."+item).css({"display":"none"});
			});
			display = false;
			return;
    	}
    	var language = {'lang':x};
    	$scope.usingCookieStore = x;
    	$.each(['lang', 'lay'], function(index, item){
		  		$("."+item).css({"display":"none"});
		});
		display = false
    }

    $scope.more = function(){
    	if(!display){
    		$.each(['lang', 'lay'], function(index, item){
		  		$("."+item).css({"display":"block"});
			})
			display = true;
    	}else{
    		$.each(['lang','lay'], function(index, item){
		  		$("."+item).css({"display":"none"});
			})
			display = false;
    	}
    }
    $scope.disappear = function(){
    	$.each(['lang', 'lay'], function(index, item){
	  		$("."+item).css({"display":"none"});
		})
		display = false;
    }
}]);

window.onload=function(){
	setTimeout(function(){
		$(".section0").addClass('secBlock');
		$(".itemnav").eq(0).css('display','block');
		$(".commonSEC").css({width:$(window).width(),height:$(window).height()});
		$(".loading").css("display","none");
		$(".container").css({"width":($(".commonSEC").length-1)*$(window).height(),"display":"block"});
	},2000);
}

// window.onload=function(){
// 	setTimeout(function(){
// 		$(".section0").addClass('secBlock');
// 		$(".itemnav").eq(0).css('display','block');
// 		$(".commonSEC").css({width:$(window).width(),height:$(window).height()});
// 		$(".loading").css("display","none");
// 		$(".container").css({"width":($(".commonSEC").length-1)*$(window).height(),"display":"block"});
// 	},2000);

// 	$('.container').on('touchstart', function(e){
// 		e.preventDefault();
// 	  	fingerFirsrtX = e.touches[0].pageX;
// 	  	fingerFirsrtY = e.touches[0].pageY;
// 	});

// 	$('.itemnav').on('touchmove', function(e){
// 		e.preventDefault();
// 	  	fingerX = e.touches[0].pageX;
// 	  	fingerY = e.touches[0].pageY;
// 	});

// 	$('.itemnav').on('touchend', function(e){
// 		if(fingerY == null || fingerY == 0){
// 			return;
// 		}
// 		if(fingerY-fingerFirsrtY<-100){
// 			var index=$(".itemnav").index(this)+1;
// 			if(index<$(".itemnav").length){
// 				$(this).css("display","none");
// 				$(".container").animate({
// 			  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px)"
// 				}, 500, 'ease-out',function(){
// 					$(".itemnav").eq(index).css("display","block");
// 				});
// 				$(".right_2").css({"left":"100%"});
// 			}												
// 		}else if(fingerY-fingerFirsrtY>100){				
// 			var index=$(".itemnav").index(this)-1;
// 			if(index>=0){
// 				$(this).css("display","none");
// 				$(".container").animate({
// 			  	'-webkit-transform':"translate(0px, -"+$(window).height()*index+"px)",'transform':"translate(0px, -"+$(window).height()*index+"px)"
// 				}, 500, 'ease-out',function(){
// 					$(".itemnav").eq(index).css("display","block");
// 				});
// 				$(".right_2").css({"left":"100%"});
// 			}							
// 		}
// 		if($(".itemnav").children().hasClass('left_2')){
// 			if(fingerX == null || fingerX == 0){
// 				return;
// 			}
// 			if(fingerX-fingerFirsrtX<-60){
// 				$(this).find(".right_2").animate({"left":"0px"},250, 'ease-out');
// 			}else if(fingerX-fingerFirsrtX>60){
// 				$(this).find(".right_2").animate({"left":"100%"},250, 'ease-out');
// 			}
// 		}
// 		fingerFirsrtX = 0;
// 		fingerFirsrtY = 0;
// 		fingerX = 0;
// 		fingerY = 0;
// 	});

// 	$(".item2_5,.item7_3").on("tap",function(){
// 		$(".right_2").animate({"left":"0px"},250, 'ease-out');
// 	});
// 	$(".job_arrow").on("tap",function(){
// 		$(".right_2").animate({"left":"100%"},250, 'ease-out');
// 	});
// }
