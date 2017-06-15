$(function() {
    var $lists = $("article ul");
    var $list = $("<li></li>").addClass("newslist").prependTo($lists);
    var $newsImg = $("<div></div>").addClass("newsimg").appendTo($list);
    var $img = $("<img>").attr("src", "jingyu.jpg").appendTo($newsImg);
    var $newsContent = $("<div></div>").addClass("newscontent").appendTo($list);
    var $h1 = $("<h1></h1>").html("womende gushi1").appendTo($newsContent);
    var $div = $("<div></div>").appendTo($newsContent);
    var $newsTime = $("<span></span>").addClass("newstime").html("1111").appendTo($div);
    var $newsSrc = $("<span></span>").addClass("newssrc").html("222").appendTo($div);
});
