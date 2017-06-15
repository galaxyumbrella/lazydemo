// 使用单例模式
// 好处：
// 1、功能分区更明显，代码没这么错乱;
// 2、每个模块的变量互不影响，自己做自己的事；
// 3、引用其它功能模块更方便，只需要模块引进来初始化就行；

$(document).ready(function() {

    // 更多产品
    var baiDu = {
        init: function() {

            this.baiduSetting();
        },

        baiduSetting: function() {

            $('#navMore, #moreProduct').mouseover(function() {
                $('#moreProduct').show();
            }).mouseout(function() {
                $('#moreProduct').hide();
            })
        }
    }

    // 右边菜单隐藏
    var menu = {
        init: function() {
            var me = this;
            me.baidunone();

        },
        baidunone: function() {
            $('#show_1, #none_1').mouseover(function() {
                $('#none_1').show();
            }).mouseout(function() {
                $('#none_1').hide();
            });
            $('#show_2, #none_2').mouseover(function() {
                $('#none_2').show();
            }).mouseout(function() {
                $('#none_2').hide();
            });
            $('#show_3, #none_3 ').click(function() {
                $('#none_3').toggle();
            });
            $('#show_4').click(function() {
                $('#none_4').slideDown(1000);
            });
            $('#_none_4').click(function() {
                $('#none_4').slideUp(1000);
            });


        }
    }


    // 皮肤的隐藏界面
    var skin = {
        init: function() {
            var me = this;
            me.baiduskin();
        },
        baiduskin: function() {
            var _str = "";
            var showWidth = $(window).width();
            var showHieght = $(window).height();
            var strKey = "strKey";
            var storage = window.localStorage;
            var dja = 0;

            $('#_ph1').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a1.jpg"),
                    _str = "Images/bg/a1.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/1.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/1.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a1.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });

            $('#_ph2').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a2.jpg");
                _str = "Images/bg/a2.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/2.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/2.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a2.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph3').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a3.jpg");
                _str = "Images/bg/a3.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/3.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/3.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a3.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph4').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a4.jpg");
                _str = "Images/bg/a4.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/4.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.imgbg = "url(Images/bg/4.jpg)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a4.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph5').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a5.jpg");
                _str = "Images/bg/a5.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/5.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/5.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;

            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a5.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph6').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a6.jpg");
                _str = "Images/bg/a6.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/6.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/6.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a6.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph7').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a7.jpg");
                _str = "Images/bg/a7.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/7.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/7.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a7.jpg");
            }).mouseout(function() {

                $('#_tpbd').attr('src', _str);
            });
            $('#_ph8').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a8.jpg");
                _str = "Images/bg/a8.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/8.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/8.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a8.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph9').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a9.jpg");
                $('#none_zj').show();
                _str = "Images/bg/a9.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/9.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/9.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a9.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph10').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a10.jpg");
                _str = "Images/bg/a10.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/10.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/10.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a10.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph11').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a11.jpg");
                _str = "Images/bg/a11.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/11.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/11.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a11.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
            $('#_ph12').click(function() {
                $('#_tpbd').attr('src', "Images/bg/a12.jpg");
                _str = "Images/bg/a12.jpg";
                $('#_bg').css({

                    "background": "url(Images/bg/12.jpg)",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed",
                    "background-size": showWidth
                });
                $("#none_zj").css("display", "inline-block");
                $('.header').css("background", "rgba(255, 255, 255, 0.47)");
                storage.imgbg = "url(Images/bg/12.jpg)";
                storage.colorbg = "rgba(255, 255, 255, 0.47)";
                storage.dja = 1;
            }).mouseover(function() {
                $('#_tpbd').attr('src', "Images/bg/a12.jpg");
            }).mouseout(function() {
                $('#_tpbd').attr('src', _str);
            });
        }
    }

    // 取消皮肤
    var cancel = {
        init: function() {
            var me = this;
            me.baiducancelskin();
        },
        baiducancelskin: function() {
            var storage = window.localStorage;
            var vc = storage.dja;
            console.log(vc);

            $("#none_zj").click(function() {
                $("#_bg").removeAttr("style");
                storage.imgbg = "";
                storage.dja = 0;
            });

            if (vc == 1) {
                $("#none_zj").css("display", "inline-block");
            } else {
                $("#none_zj").css("display", "none");
            }

        }
    }


    // 进入加载上次的皮肤

    var last = {
        init: function() {
            var me = this;
            me.baidulasttimeskin();
        },
        baidulasttimeskin: function() {
            var storage = window.localStorage;
            var showWidth = $(window).width();
            var showHieght = $(window).height();
            var va = storage.imgbg;
            var vb = storage.colorbg;


            $('#_bg').css({

                "background": va,

                "background-repeat": "no-repeat",
                "background-attachment": "fixed",
                "background-size": showWidth
            });

            $('.header').css("background", vb);
        }
    }


    //搜索下面的我的关注，导航等的隐藏界面
    var nav = {
        init: function() {
            var me = this;
            me.baidusearch();
        },
        baidusearch: function() {
            var _color = '#666';
            var _bgcolor = '#ffffff';
            var _backcolor = '#929292';
            var a, b, c, d, e;


            $('#_wdgz').click(function() {
                $('#_wdgz').css('background', '#666');
                $('#_wdgz').css('color', '#ffffff');
                $('#_tip').attr('src', 'Images/entry/wd1.png');
                $('#_nav_text_1').css('background', '#ffffff');
                $('#_nav_text_1').css('color', '#666');
                $('#_nav_text_2').css('background', '#ffffff');
                $('#_nav_text_2').css('color', '#666');
                $('#_nav_text_3').css('background', '#ffffff');
                $('#_nav_text_3').css('color', '#666');
                $('#_nav_text_4').css('background', '#ffffff');
                $('#_nav_text_4').css('color', '#666');

                $('#_follow_').show();
                $('#_recommend_').hide();
                $('#_navigation_').hide();
                $('#_video_').hide();
                $('#_shoppong_').hide();
                a = 1;
                b = c = d = e = 0;

            }).mouseover(function() {
                $('#_wdgz').css('background', '#929292');
                $('#_wdgz').css('color', '#ffffff');
            }).mouseout(function() {
                if (a == 1) {
                    $('#_wdgz').css('background', '#666');
                    $('#_wdgz').css('color', '#ffffff');

                } else {
                    $('#_wdgz').css('background', '#ffffff');
                    $('#_wdgz').css('color', '#666');
                    $('#_tip').attr('src', 'Images/entry/wd1.png');

                }
            });

            $('#_nav_text_1').click(function() {
                $('#_nav_text_1').css('background', '#666');
                $('#_nav_text_1').css('color', '#ffffff');
                $('#_wdgz').css('background', '#ffffff');
                $('#_wdgz').css('color', '#666');
                $('#_nav_text_2').css('background', '#ffffff');
                $('#_nav_text_2').css('color', '#666');
                $('#_nav_text_3').css('background', '#ffffff');
                $('#_nav_text_3').css('color', '#666');
                $('#_nav_text_4').css('background', '#ffffff');
                $('#_nav_text_4').css('color', '#666');


                $('#_nav_text_1').css('background', '#666');
                $('#_nav_text_1').css('color', '#ffffff');
                $('#_recommend_').show();
                $('#_follow_').hide();
                $('#_navigation_').hide();
                $('#_video_').hide();
                $('#_shoppong_').hide();
                b = 1;
                a = c = d = e = 0;
            }).mouseover(function() {
                $('#_nav_text_1').css('background', '#929292');
                $('#_nav_text_1').css('color', '#ffffff');
            }).mouseout(function() {

                if (b == 1) {
                    $('#_nav_text_1').css('background', '#666');
                    $('#_nav_text_1').css('color', '#ffffff');

                } else {
                    $('#_nav_text_1').css('background', '#ffffff');
                    $('#_nav_text_1').css('color', '#666');
                    $('#_tip').attr('src', 'Images/entry/wd1.png');

                }

            });
            $('#_nav_text_2').click(function() {
                $('#_nav_text_2').css('background', '#666');
                $('#_nav_text_2').css('color', '#ffffff');
                $('#_wdgz').css('background', '#ffffff');
                $('#_wdgz').css('color', '#666');
                $('#_nav_text_1').css('background', '#ffffff');
                $('#_nav_text_1').css('color', '#666');
                $('#_nav_text_3').css('background', '#ffffff');
                $('#_nav_text_3').css('color', '#666');
                $('#_nav_text_4').css('background', '#ffffff');
                $('#_nav_text_4').css('color', '#666');


                $('#_nav_text_2').css('background', '#666');
                $('#_nav_text_2').css('color', '#ffffff');
                $('#_navigation_').show();
                $('#_follow_').hide();
                $('#_recommend_').hide();
                $('#_video_').hide();
                $('#_shoppong_').hide();
                c = 1;
                a = b = d = e = 0;
            }).mouseover(function() {
                $('#_nav_text_2').css('background', '#929292');
                $('#_nav_text_2').css('color', '#ffffff');
            }).mouseout(function() {
                if (c == 1) {
                    $('#_nav_text_2').css('background', '#666');
                    $('#_nav_text_2').css('color', '#ffffff');

                } else {
                    $('#_nav_text_2').css('background', '#ffffff');
                    $('#_nav_text_2').css('color', '#666');
                    $('#_tip').attr('src', 'Images/entry/wd1.png');

                }
            });
            $('#_nav_text_3').click(function() {
                $('#_nav_text_3').css('background', '#666');
                $('#_nav_text_3').css('color', '#ffffff');
                $('#_wdgz').css('background', '#ffffff');
                $('#_wdgz').css('color', '#666');
                $('#_nav_text_2').css('background', '#ffffff');
                $('#_nav_text_2').css('color', '#666');
                $('#_nav_text_1').css('background', '#ffffff');
                $('#_nav_text_1').css('color', '#666');
                $('#_nav_text_4').css('background', '#ffffff');
                $('#_nav_text_4').css('color', '#666');

                $('#_nav_text_3').css('background', '#666');
                $('#_nav_text_3').css('color', '#ffffff');
                $('#_video_').show();
                $('#_follow_').hide();
                $('#_recommend_').hide();
                $('#_navigation_').hide();
                $('#_shoppong_').hide();
                d = 1;
                a = b = c = e = 0;
            }).mouseover(function() {
                $('#_nav_text_3').css('background', '#929292');
                $('#_nav_text_3').css('color', '#ffffff');
            }).mouseout(function() {
                if (d == 1) {
                    $('#__nav_text_3').css('background', '#666');
                    $('#_nav_text_3').css('color', '#ffffff');

                } else {
                    $('#_nav_text_3').css('background', '#ffffff');
                    $('#_nav_text_3').css('color', '#666');
                    $('#_tip').attr('src', 'Images/entry/wd1.png');

                }
            });
            $('#_nav_text_4').click(function() {
                $('#_nav_text_4').css('background', '#666');
                $('#_nav_text_4').css('color', '#ffffff');
                $('#_wdgz').css('background', '#ffffff');
                $('#_wdgz').css('color', '#666');
                $('#_nav_text_2').css('background', '#ffffff');
                $('#_nav_text_2').css('color', '#666');
                $('#_nav_text_3').css('background', '#ffffff');
                $('#_nav_text_3').css('color', '#666');
                $('#_nav_text_1').css('background', '#ffffff');
                $('#_nav_text_1').css('color', '#666');

                $('#_nav_text_4').css('background', '#666');
                $('#_nav_text_4').css('color', '#ffffff');
                $('#_shoppong_').show();
                $('#_follow_').hide();
                $('#_recommend_').hide();
                $('#_navigation_').hide();
                $('#_video_').hide();
                e = 1;
                a = b = c = d = 0;
            }).mouseover(function() {
                $('#_nav_text_4').css('background', '#929292');
                $('#_nav_text_4').css('color', '#ffffff');
            }).mouseout(function() {
                if (e == 1) {
                    $('#_nav_text_4').css('background', '#666');
                    $('#_nav_text_4').css('color', '#ffffff');

                } else {
                    $('#_nav_text_4').css('background', '#ffffff');
                    $('#_nav_text_4').css('color', '#666');
                    $('#_tip').attr('src', 'Images/entry/wd1.png');

                }
            });
        }
    }

    // 回到顶部
    var top = {
        init: function() {
            var me = this;
            me.baidutop();
        },
        baidutop: function() {
            window.onscroll = function() {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                var top_div = document.getElementById("s_top_feed");
                console.log(t);
                var mTop = document.getElementById("s_top_feed").offsetTop;
                //减去滚动条的高度
                var sTop = document.body.scrollTop;
                var result = mTop - sTop;
                if (mTop == result) {
                    top_div.style.display = "none";

                } else {
                    top_div.style.display = "inline";
                }



            }

        }
    }

    // 初始化
    baiDu.init();
    menu.init();
    skin.init();
    cancel.init();
    last.init();
    nav.init();
    top.init();
});
