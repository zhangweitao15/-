new  IScroll('#containerRight');
var myScroll = new IScroll('#containerLeft', {
	tap: true
});
// 获取页面上 所有的a 标签
var as = document.querySelectorAll('.menu a');
// 为所有的a标签注册点击事件
for(var i = 0; i < as.length; i++) {
	as[i].addEventListener('tap', fn);
}
function fn() {
	// 首先利用循环将 高亮类名全部移除
	for (var j = 0; j < as.length; j++) {
		as[j].classList.remove('active');
	}
	// 为当前点击的a添加高亮
	this.classList.add('active');
	// 调用插件内部的方法实现点击滚动
	myScroll.scrollToElement(this, 2000)
}




//  var left = null;
// var right = null;
// var navs = null;
// function loaded () {

//     left = new IScroll('#left', {
//     	tap: true
//     });

//     right = new IScroll('#right', {
//     	tap: true
//     });

//     navs = document.getElementById('left').getElementsByTagName('a');

//     for (var i = 0; i < navs.length; i++) {

//     	navs[i].addEventListener('tap', myCustomTapEvent);

//     }
 // }

// function myCustomTapEvent (e) {
		
// 	for (var i = 0; i < navs.length; i++) {

// 		navs[i].classList.remove('active');

// 	}

// 	e.target.classList.add('active');

// 	left.scrollToElement(e.target);
// }
