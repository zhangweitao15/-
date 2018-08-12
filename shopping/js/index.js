$(function() {
    var section2 = $('.section-2');
    var section3 = $('.section-3');
    var section4 = $('.section-4');
    var section5 = $('.section-5');
    var section6 = $('.section-6');
    var section8 = $('.section-8');
    // 引入fullpage 文件
    $('#fullpage').fullpage({
            // 改变滚动的速度
            scrollingSpeed: 1000,
            // 在页面右侧显示导航点
            navigation: true,
            // 使每一屏中的内容默认在左上角显示
            verticalCentered: false,
            // 在屏幕开始滚动的时候 执行对应的函数
            onLeave: function(index, nextIndex, direction) {
                // index  当前屏幕的序号 滚动前的屏幕序号
                // nextIndex 下一个屏幕的序号, 滚动到的屏幕号
                // direction 滚动的方向向上滚动 up 向下滚动 down
                // 判断当滚动到的屏幕序号是2时, 执行动画

                // js 提供的 动画 animate 共有4个参数
                /* 1 参数1 是对象, 其中书写要变化的样式
                    2. 参数2 是 time 动画动画运动的时间 以毫秒为单位
                    3. 参数3 是 执行时 的运动方式 swing(变速) linear(匀速)
                    4. 参数4 是 动画执行完成后执行的 回调函数  */
                $('.section *').stop().attr('style', '')
                section6.stop().css('backgroundPositionX', '-200px');

                if (nextIndex == 2) {
                    // 设置2屏的动画
                    section2.find('.e3').animate({
                        opacity: 1,
                        marginLeft: -100,
                    }, 1200, function() {

                        $(this).find('.e4').animate({
                            opacity: 1,
                        }, 600, function() {
                            $(this).parent().hide();
                            section2.find('.e5').show().animate({
                                marginLeft: 110,
                                bottom: 447,
                                width: 170
                            }, 900);
                            section2.find('.e6').animate({
                                height: 218
                            }, 1000);
                            section2.find('.e2').animate({
                                opacity: 1
                            });
                        })

                    })
                }
                // 第三屏;
                if (nextIndex == 3) {
                    section2.find('.e7').animate({
                        bottom: -$(window).height() / 2 - 50,
                        width: 207,
                        marginLeft: -227,
                    }, 1000)
                    section2.find('.mask').show();
                }
                //第四
                if (nextIndex == 4) {
                    //隐第二屏沙发
                    section2.find('.e7').hide()
                        // 让第三屏的准备好的沙发显示
                    section3.find('.sofa').show().animate({
                        bottom: -$(window).height() + 300,
                        marginLeft: -57,
                    }, 1000, function() {
                        $(this).hide();
                        section4.find('.cart img:last-child').show();
                        //购物车走出去
                        section4.find('.cart').animate({
                            marginLeft: 900
                        }, 1000, function() {
                            // 红色的文字显示出来
                            section4.find('.e3').fadeIn(800);
                            //收货地址背景显示出来
                            section4.find('.e6').animate({
                                opacity: 1
                            }, 600, function() {
                                // 具体地址显示出来
                                $(this).find('img').animate({
                                    opacity: 1
                                }, 400)
                            })
                        })
                    });

                }
                if (nextIndex == 6) {
                    // 去掉沙发身上原有的过度效果
                    section5.find('.sofa').css({
                            transition: 'none'
                        })
                        // 让像沙发实现掉落效果
                    section5.find('.sofa').animate({
                        bottom: -$(window).height() + 500,
                        width: 100,
                        marginLeft: -300
                    }, 1000, function() {
                        $(this).hide();
                    })
                    section6.find('.e1').animate({
                        opacity: 1,
                        marginLeft: -310
                    }, 1000, function() {
                        $(this).animate({
                            bottom: 96
                        }, 1000, function() {
                            section6.animate({
                                backgroundPositionX: -1068
                            }, 3000, 'linear', function() {
                                section6.find('.e3').animate({
                                    opacity: 1,

                                }, 1000)
                                section6.find('.e6').animate({
                                    height: 305
                                }, 1000, function() {

                                    $(this).animate({
                                        bottom: 111
                                    }, 600, function() {
                                        $(this).animate({
                                            marginLeft: 25
                                        }, 600, function() {
                                            section6.find('.e7').show();
                                            section6.find('.e9').show();
                                            section6.find('.e8').animate({
                                                height: 294
                                            }, 1000)
                                        })
                                    })
                                })
                            });
                            section6.find('.e2').animate({
                                opacity: 1
                            }, 1000)
                            section6.find('.e5').show();
                        });
                    })
                }
            }

        })
        // 当鼠标在第8屏移动的时候
        // 获取手图片
    var hand = section8.find('.e4')
    section8.on('mousemove', function(e) {
        var pageX = e.pageX;
        var pageY = e.pageY;
        //限制手的移动范围
        if (pageY < $(window).height() - 449) {
            pageY = $(window).height() - 449;
        }
        hand.css({
            top: pageY + 5,
            left: pageX + -70
        })
    })
    $('#again').on('click', function() {
        // 插件提供的调用方式 滚动回第一屏
        $.fn.fullpage.moveTo(1);
    })
    $('.goon').on('click', function() {
        $.fn.fullpage.moveSectionDown();
    })
});