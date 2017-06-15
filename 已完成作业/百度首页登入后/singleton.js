// 使用单例模式
// 好处：
// 1、功能分区更明显，代码没这么错乱;
// 2、每个模块的变量互不影响，自己做自己的事；
// 3、引用其它功能模块更方便，只需要模块引进来初始化就行；

$(function() {
    // 天气
    var weather = {
            init: function() {
                this.weatherSetting();
            },

            weatherSetting: function() {
                $(".weather-wrapper").hover(function() {
                    $(".weather-content").show();
                }, function() {
                    $(".weather-content").hide();
                });
                $(".weather-content").hover(function() {
                    $(this).show();
                }, function() {
                    $(this).hide();
                });
            }
        }
        // 下拉菜单
    var menu = {
            init: function() {
                this.menuHover();
            },
            menuHover: function() {
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
            }
        }
        // 皮肤选项
    var skin = {
        init: function() {
            this.closeSkin();
        },

        closeSkin: function() {
            $("#close-changeskin").click(function(event) {
                $("#skin-items").css({ display: "none" });
            });
            $("#changeskin-btn").click(function() {
                $("#skin-items").css({ display: "block" });
            });
            $(".skin-img").each(function(index) {
                $(this).click(function() {
                    var bg = "bg-img" + index;
                    $(".wrapper").removeClass().addClass("wrapper").addClass(bg);
                    localStorage.setItem("skinname", bg); //存储本地皮肤值
                });
            });

            var Str = localStorage.getItem("skinname"); //读取存储的皮肤
            if (Str) {
                $(".wrapper").addClass(Str);
            }

        }
    }

    //我的关注切换栏
    var toggle = {
        init: function() {
            this.toggleMenu();
        },

        toggleMenu: function() {
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

        }
    }
    // 返回顶部
    var top = {
        init: function() {
            this.backtoTop();
        },

        backtoTop: function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 100) {
                    $(".back-to-top").fadeIn(1000);
                } else if ($(window).scrollTop() < 100) {
                    $(".back-to-top").fadeOut(1000);
                }
            });
            $(".back-to-top").click(function() {
                $('body,html').animate({ scrollTop: 0 }, 400);
            });
        }
    }



    // 初始化
    weather.init();
    menu.init();
    skin.init();
    toggle.init();
    top.init();












});
