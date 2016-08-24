$(function(){

	'use strict';
	// 侧栏菜单效果
	// 点击sidebar_trigger侧栏sidebar滑出，mask蒙上
	var sidebar=$('#sidebar');
	var mask=$('#mask');
	var sidebar_trigger=$('#sidebar_trigger');
	var backbutton=$('#back-to-top');

	function showSideBar(){
		mask.fadeIn();
		sidebar.css('right',0);
	}
	function hideSiderBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSiderBar);

	// 返回顶部效果顶部按钮，scrollTop变为零
	//点击返回
	backbutton.on('click',function(){
			$('html,body').animate({
					scrollTop:0
				},800);
		});
    // 判断window的才css属性scrollTop()和height()
	$(window).on('scroll',function(){
			if($(window).scrollTop()>$(window).height()){
				backbutton.fadeIn();	
			}else{
				backbutton.fadeOut();	
			}
		})
	//使用windows元素即触发scroll()事件
	$(window).trigger('scroll');
	 
})