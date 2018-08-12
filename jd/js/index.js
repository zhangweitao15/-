var swiper = new Swiper('.swiper-container', {
	pagination: {
	  el: '.swiper-pagination',
	},
  });
// 1. 头部固定导航位置颜色滚动变化
	  //获取需要变化背景的元素节点
	var header= document.querySelector('header .center')// 头部标签
	var imgHeight = document.querySelector('.banner').offsetHeight;// 轮播图高度
	// 注册页面滚动事件
	window.onscroll = function () {
		// 获取当前滚动的位置
		var scrollTop = document.documentElement.scrollTop;
		// 根据已知条件计算 当前透明度
		// 当前位置/ 目标位置 = 当前透明度/ 目标透明度
		var opacity = scrollTop * 0.85 / imgHeight;
		// 将透明度添加到标签中
		header.style.background = 'rgba(201, 21, 35,'+ opacity +')';
		// 设置透明度范围
		if (opacity == 0) {
			opacity = 0
		}
	}
// 倒计时
	// 获取时间显示位置
	var spans = document.querySelectorAll('.countDown > span');
	// 获取目标时间
	var endTime = new Date(2018, 8, 5, 12, 58, 0).getTime();
	// 定义计时器 
	var time = setInterval(function () {
		// 获取当前的时间
		var now = new Date().getTime();
		// 计算倒计时 并将毫秒转换成秒
		var t = (endTime - now) / 1000;
		if (t <= 0 ) {
			clearInterval(time);
			return;
		}
		// console.log(t);
		// 将时间格式化
		var hour = Math.floor(t%86400/3600)
		var minute = Math.floor(t%86400%3600/60)
		var second = Math.floor(t%60)

		//补零
		// - 百以内取十位 Math.floor(num/10)
		// - 百以内取个位 num%10 
		spans[0].innerText = Math.floor(hour/10)
		spans[1].innerText = hour%10
		spans[3].innerText = Math.floor(minute/10)
		spans[4].innerText = minute%10
		spans[6].innerText = Math.floor(second/10)
		spans[7].innerText = second%10

	}, 1000);
		
 