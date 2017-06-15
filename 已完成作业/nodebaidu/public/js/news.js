$(function() {

    // 新闻类型排版
    var deviceWidth = $("body").width();
    $("nav ul li").each(function(index, el) {
        // 将a中的内容拆分成数组 如果字数>2个 其宽度就占2格
        if ($(this).find("a").html().split("").length > 2) {
            $(this).width(deviceWidth / 3);
        } else {
            $(this).width(deviceWidth / 6);
        }
    });
    
    $('nav ul li:nth-child(1)').css({background:'red'});
    // refreshNews();

    refreshNews('精选');
    
    $('nav ul li').click(function(e){
        // console.log($(this).text());        
        e.preventDefault();
        var type= $(this).text();
        refreshNews(type);
        $(this).css({background:'red'});
        $(this).siblings('li').css({background:'#3e98f0'});
    });  
});


function refreshNews(type) {
    var $lists = $("article ul");
    $lists.empty();
    // 动态添加新闻
    $.ajax({
        url: '../news',
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {
            data.forEach(function(item, index, array) {
                var $list = $("<li></li>").addClass("news-list").prependTo($lists);
                var $newsImg = $("<div></div>").addClass("news-img").appendTo($list);
                var $img = $("<img>").attr("src", item.newsimg).appendTo($newsImg);
                var $newsContent = $("<div></div>").addClass("news-content").appendTo($list);
                var $h1 = $("<h1></h1>").html(item.newstitle).appendTo($newsContent);
                var $div = $("<div></div>").appendTo($newsContent);
                var $newsTime = $("<span></span>").addClass("news-time").html(item.newstime).appendTo($div);
                var $newsSrc = $("<span></span>").addClass("news-src").html(item.newssrc).appendTo($div);
            });


        }
    });

}
