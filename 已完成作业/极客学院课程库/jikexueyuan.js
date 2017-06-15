$(function() {
    // 职业学院下拉框
    $(".zhiye").mouseover(function() {
        $(this).children("ul.h-nav-1").show();
    }).mouseout(function(event) {
        $(this).children("ul.h-nav-1").hide();
    });
    // 会员课程下拉框
    $(".vip").mouseover(function() {
        $(this).children("ul.h-nav-2").show();
    }).mouseout(function(event) {
        $(this).children("ul.h-nav-2").hide();
    });
    // 极客社区下拉框
    $(".shequ").mouseover(function() {
        $(this).children("ul.h-nav-3").show();
    }).mouseout(function(event) {
        $(this).children("ul.h-nav-3").hide();
    });
    // 顶部所有下拉框hover
    $(".h-nav-nav").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    // 放大镜点击事件
    $(".icon-box .search-icon").click(function(event) {
        $(".search-box").animate({
            width: "850px",
        }, 500).show();
    });
    $(".tagbox-close").click(function(event) {
        $(".search-box").animate({
            width: "0",
        }).hide();
    });
    //登入按钮显示
    $(".login-icon").hover(function() {
        $(".login-icon-down").show();
    }, function() {
        $(".login-icon-down").hide();
    });
    $(".login-icon-down").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    // 网页默认状态
    $(".l-list-second").show();
    $(".l-list-first>li:nth-child(1)").addClass('sd-click-color');
    $(".right-content-hide").not(".kechengku").hide();
    //课程库点击事件
    $(".l-list-first>li").eq(0).click(function(event) {
        $(".right-content-hide").not(".kechengku").hide();
        $(".kechengku").show();
        $(this).addClass('sd-click-color');
        $(".l-list-second").show();
    });
    // 职业路径图点击事件
    $(".l-list-first>li").eq(1).click(function(event) {
        $(".right-content-hide").not(".zhiye").hide();
        $(".zhiye").show();
        if ($(".l-list-second").css("display") == "block") {
            $(".l-list-second").hide();
            $(".l-list-first>li").eq(0).removeClass("sd-click-color");
        }
    });
    // 知识体系图点击事件
    $(".l-list-first>li").eq(2).click(function(event) {
        $(".right-content-hide").not(".zhishi").hide();
        $(".zhishi").show();
        if ($(".l-list-second").css("display") == "block") {
            $(".l-list-second").hide();
            $(".l-list-first>li").eq(0).removeClass("sd-click-color");
        }
    });
    // 系列课程点击事件
    $(".l-list-first>li").eq(3).click(function(event) {
        $(".right-content-hide").not(".xilie").hide();
        $(".xilie").show();
        if ($(".l-list-second").css("display") == "block") {
            $(".l-list-second").hide();
            $(".l-list-first>li").eq(0).removeClass("sd-click-color");
        }
    });
    // 课程标签点击事件
    $(".l-list-first>li").eq(4).click(function(event) {
        $(".right-content-hide").not(".biaoqian").hide();
        $(".biaoqian").show();
        if ($(".l-list-second").css("display") == "block") {
            $(".l-list-second").hide();
            $(".l-list-first>li").eq(0).removeClass("sd-click-color");
        }
    });
    // 左侧课程库下拉菜单鼠标经过事件
    $(".l-list-second li").each(function(index) {
        var hideClassName = ".hide-" + index;
        $(this).hover(function() {
            $(this).addClass('l-list-secondcss');
            $(this).children('a').css({ "color": "#3cb85e" });
            $(hideClassName).show();
        }, function() {
            $(this).removeClass("l-list-secondcss");
            $(this).children('a').css({ "color": "#333" });
            $(hideClassName).hide();
        });
    });

    $("div.hideclass").each(function(index) {
        $(this).hover(function() {
            $(this).show();
            $(".l-list-second li").eq(index).addClass('l-list-secondcss');
            $(".l-list-second li").eq(index).children("a").css({ color: "#3cb85e" });
        }, function() {
            $(this).hide();
            $(".l-list-second li").eq(index).removeClass('l-list-secondcss');
            $(".l-list-second li").eq(index).children("a").css({ color: "#333" });
        });
    });

    // 右侧鼠标经过事件

    $(".kechengku-head-show ul li").each(function(index) {
        $(this).hover(function() {
            $(".kechengku-head-hide").eq(index).show();
        }, function() {
            $(".kechengku-head-hide").eq(index).hide();
        });
    });
    $(".kechengku-head-hide").hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    //显示三角形播放图片和文字内容
    $(".kechengku-main0>ul>li").each(function(index) {
        $(this).hover(function() {
            $(this).children(".main-info").stop().animate({ "height": "180px" }, 400);
            $(this).children(".main-info").children("p:nth-child(2n)").show();
        }, function() {
            $(this).children(".main-info").stop().animate({ "height": "90px" }, 400);
            $(this).children(".main-info").children("p:nth-child(2n)").hide();
        });
    });

    $("#kechengku-main-type ul li").each(function(index) {
        $(this).hover(function() {
            $(this).children('.kechengku-img-hover').fadeIn();
        }, function() {
            $(this).children('.kechengku-img-hover').fadeOut();
        });
    });

    // 切换排版方式
    $(".kechengku-settype a:nth-child(1)").on('click', function(event) {
        $(".kechengku-main0").show();
        $(".kechengku-main1").hide();
    });
    $(".kechengku-settype a:nth-child(2)").on('click', function(event) {
        $(".kechengku-main0").hide();
        $(".kechengku-main1").show();
    });

    // 返回顶部按钮
    //当滚动条的位置处于距顶部100像素以上时，回到顶部按钮，否则消失
    $(window).scroll(function() {

        if ($(window).scrollTop() > 100) {
            $(".back-to-top").fadeIn(500);
        } else {
            $(".back-to-top").fadeOut(500);
        }
    });

    //当点击跳转链接后，回到页面顶部位置
    $(".back-to-top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
        // console.log($(window).scrollTop());
    });



















});
