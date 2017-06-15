$(document).ready(function() {
    // 天气
    $(".weather-wrapper").hover(function() {
        $(".weather-content").show();
    },function() {
        $(".weather-content").hide();
    });
    $(".weather-content").hover(function() {
        $(this).show();
    },function() {
        $(this).hide();
    });
    
    // 更多产品下拉菜单显示
    $(".more-list").hover(function() {
        $(this).siblings('ul').show();
    }, function() {
        $(this).siblings('ul').hide();
    });

    $(".more-list-down").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    //顶部我的信息下拉菜单
    $(".myinfo-name").hover(function() {
        $(".myinfo").show();
    }, function() {
        $(".myinfo").hide();
    });

    $(".myinfo").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    //顶部设置的下拉菜单
    $(".setting-name").hover(function() {
        $(".setting").show();
    }, function() {
        $(".setting").hide();
    });
    $(".setting").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });

    //保存和更改皮肤
    $("#changeskin-btn").click(function() {
        $("#skin-items").css({ display: "block" });
    });
    $("#close-changeskin").click(function(event) {
        $("#skin-items").css({ display: "none" });
    });

    $(".skin-img").each(function(index) {
        $(this).click(function() {
            var bg = "bg-img" + index;
            $(".wrapper").removeClass().addClass("wrapper").addClass(bg);
            localStorage.setItem("skinname", bg); //存储本地皮肤值
        });
    });

    var Str = localStorage.getItem("skinname"); //读取存储的皮肤
    // console.log(Str);
    if (Str) { //如果有值执行代码
        $(".wrapper").addClass(Str);
    }


    //我的关注切换栏
    $(".main-head a").each(function(index) {
        $(this).mouseover(function(event) { //鼠标经过时改变样式
            $(".tabin").removeClass('tabin');
            $(this).addClass('tabin');

        }).mouseout(function(event) {
            $(".tabin").removeClass('tabin');
        }).click(function(event) { //鼠标点击时出现内容 

            $(".tabinbg").removeClass('tabinbg');
            $(".main-head a").eq(index).addClass("tabinbg");

            $(".main-content").removeClass('main-content-active');
            $(".main-content").eq(index).addClass('main-content-active');
        });

    });


    //当滚动条的位置处于距顶部100像素以上时，回到顶部按钮，否则消失
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".back-to-top").fadeIn(1000);
        } else if ($(window).scrollTop()<100) {
            $(".back-to-top").fadeOut(1000);
        }
    });

    //当点击跳转链接后，回到页面顶部位置

    $(".back-to-top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
    });
//     jQuery动画连续触发、滞后反复执行解决办法
// 1、在触发元素上的事件设置为延迟处理, 即可避免滞后反复执行的问题（使用setTimeout）

// 2、在触发元素的事件时预先停止所有的动画，再执行相应的动画事件（使用stop）
     // 如$("#div").stop().animate({width:"100px"},100);　

    //$(window).scrollTop()这个方法是当前滚动条滚动的距离
    //$(window).height()获取当前窗体的高度
    //$(document).height()获取当前文档的高度
    // console.log($(window).height());
    // console.log($(document).height());

    // $(window).bind("scroll", function() {
    //     //当滚动条滚动时
    //     var lazyheight = 0;
    //     lazyheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    //     if ($(document).height() <= lazyheight) {
    //         console.log("加载数据");
    //     }
    // });



});
