
$(function(){
	// 安全宝LOGO返回首页效果
	$("#menu_box #menu #logo_box").mouseover(function(){
		$("#menu_box #menu #logo_box #gohome").show();
	})
	$("#menu_box #menu #logo_box").mouseout(function(){
		$("#menu_box #menu #logo_box #gohome").hide();
	})

	// menu菜单点击后背景颜色变化
	$("#menu_box #menu #menu_center li a").click(function(){
		$("#menu_box #menu #menu_center li a").css("background-color","#373D44");
		$(this).css("background-color","#474D54");
	});

	// 弹出登录框效果
	$(document).click(function(e){
		if(e.target.id=="logname"){
			$("#menu_box #menu #log").toggle();
		}else if(e.target.id=="log"||e.target.className=="email_icon"||e.target.className=="email"||e.target.className=="pwd_icon"||e.target.className=="pwd"||e.target.className=="auto_log"||e.target.className=="auto_text"||e.target.className=="forget_pwd"||e.target.className=="login"){
			$("#menu_box #menu #log").show();
		}else{
			$("#menu_box #menu #log").hide();
		}
	});


	// 滚动banner效果
	var i=0;
	timer=setInterval(banner_play,5000);
	$("#banner").mouseover(function(){
		clearInterval(timer);
	});
	$("#banner").mouseout(function(){
		timer=setInterval(banner_play,5000);
	});
	$("#banner_box #banner #banner_text #slide_dot a.dot").click(function(){
		i=$(this).index();
		$(this).siblings().css("background-color","#FFFFFF");
		$(this).css("background-color","#FED130");
		$("#banner_box #banner .banner_img").fadeOut("normal");
		$("#banner_box #banner .banner_img").eq($(this).index()).fadeIn("normal");
		if($(this).index()==0){
			$("#banner_box").css("background-color","#FFF38F");
		}else if($(this).index()==1){
			$("#banner_box").css("background-color","#023260");
		}else if($(this).index()==2){
			$("#banner_box").css("background-color","#11A4BC");
		}else if($(this).index()==3){
			$("#banner_box").css("background-color","#197FD6");
		}else if($(this).index()==4){
			$("#banner_box").css("background-color","#3AA45A");
		}
	});
		function banner_play(){
			i++;
			if(i==5){
				i=0;
		}
		$("#banner_box #banner .banner_img").fadeOut("normal");
		$("#banner_box #banner .banner_img").eq(i).fadeIn("normal");
		$("#banner_box #banner #banner_text #slide_dot a.dot").css("background-color","#FFFFFF");
		$("#banner_box #banner #banner_text #slide_dot a.dot").eq(i).css("background-color","#FED130");
		if(i==0){
			$("#banner_box").css("background-color","#FFF38F");
		}else if(i==1){
			$("#banner_box").css("background-color","#023260");
		}else if(i==2){
			$("#banner_box").css("background-color","#11A4BC");
		}else if(i==3){
			$("#banner_box").css("background-color","#197FD6");
		}else if(i==4){
			$("#banner_box").css("background-color","#3AA45A");
		}
	}

	// banner01里面齿轮转动效果
	var j=0;
	setInterval(function(){
		j++;
		if(j==360){
			j=0;
		}
		$("#banner_box #banner .banner_img_1 #nut span").css("MozTransform","rotate("+j+"deg)");
	},10);

	// banner02里面图片透明度变化效果
	setInterval(function(){
		$("#banner_box #banner .banner_img_2 .kaiqi_img").animate({opacity:'toggle'},1000);
	},1000);

	// 在线客服意见反馈区域效果
	$("#feedback_box a.qq_box").mouseover(function(){
		$("#feedback_box a.qq_box div.qq_text").show();
		$("#feedback_box a.qq_box").css("background-color","#92CFFF");
	});
	$("#feedback_box a.qq_box").mouseout(function(){
		$("#feedback_box a.qq_box div.qq_text").hide();
		$("#feedback_box a.qq_box").css("background-color","#74B3FB");
	});
	$("#feedback_box div.dail_box").mouseover(function(){
		$("#feedback_box div.dail_box div.dail_text").show();
		$("#feedback_box div.dail_box").css("background-color","#92CFFF");
	});
	$("#feedback_box div.dail_box").mouseout(function(){
		$("#feedback_box div.dail_box div.dail_text").hide();
		$("#feedback_box div.dail_box").css("background-color","#74B3FB");
	});
	$("#feedback_box a.suggest_box").mouseover(function(){
		$("#feedback_box a.suggest_box div.suggest_text").show();
		$("#feedback_box a.suggest_box").css("background-color","#92CFFF");
	});
	$("#feedback_box a.suggest_box").mouseout(function(){
		$("#feedback_box a.suggest_box div.suggest_text").hide();
		$("#feedback_box a.suggest_box").css("background-color","#74B3FB");
	});

	$("#feedback_box").css({"top":$(window).height()*0.5+"px","left":$(window).width()*0.5+$("#banner").width()*0.5+"px"});
	$(window).scroll(function(){
		$("#feedback_box").animate({top:$(window).height()*0.5+$(document).scrollTop()+"px"},30);
	});

	// 资讯广播轮播效果
	var loop_num=0;
	setInterval(function(){
		if(loop_num==0){
			$("#boardcast_box #boardcast #boardcast_loop ul").animate({left:-215*(loop_num+1)+"px"},1000);
			loop_num++;
		}else if(loop_num==4){
			$("#boardcast_box #boardcast #boardcast_loop ul").animate({left:-215*(loop_num+1)+"px"},1000);
			$("#boardcast_box #boardcast #boardcast_loop ul").animate({left:0+"px"},1);
			loop_num=0;
		}else{
			$("#boardcast_box #boardcast #boardcast_loop ul").animate({left:-215*(loop_num+1)+"px"},1000);
			loop_num++;
		}
	},5000)
});