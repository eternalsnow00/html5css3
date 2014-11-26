var l=function(){
	var y=["img/1-1.png","img/1-2.png","img/1-3.png","img/1-4.png","img/2-1.png","img/2-2.png","img/2-3.png","img/2-4.png","img/3-1.png","img/3-2.png","img/3-3.png","img/4-1.png","img/4-2.png","img/4-3.png","img/4-4.png","img/4-5.png","img/4-6.png","img/5-1.png","img/5-2.png","img/6-1.png","img/6-2.png","img/6-3.png","img/6-4.png","img/7-1.png","img/7-2.png"],
	B=y.length,E=0;
	var A=function(H){
		var G=new Image();
		G.onload=function(){
			++E;
			n.text(parseInt((E/B)*100)+"%")
		};
		G.src=H
	};
	for(var D=0;D<B;++D){
		A(y[D])
	}
	var F=60,z=function(){
		if(0>=F){
			if(E/B>0.5){
				C()
			}else{
				alert("加载图片失败，请返回刷新尝试!")
			}
		}else{
			F-=0.5;
			if(E==B){
				C()
			}else{
				setTimeout(z,500)
			}
		}
	};
	var C=function(){};
	return function(G){if(typeof(G)=="function"){C=G}z()}}();l(function(){d.hide();h.show().find(".section_0 > .logo").addClass("breathe");setTimeout(function(){h.find(".section_0").css({opacity:"0"})},800);setTimeout(fun