//等宽瀑布流
$(function() {

    $(window).on("load", function() {
        imgLocation();
        // scrollside();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }] };
        window.onscroll = function() {
            if (scrollside()) {//滚动加载
                $.each(dataImg.data, function(index, value) {
                    //动态创建盒子
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var boxcontent = $("<div>").addClass("box-content").appendTo(box);
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(boxcontent);
                    // console.log("img/"+$(value).attr("src"));
                });
                imgLocation();
            }
        };
        window.onresize = function() {//事件会在窗口或框架被调整大小时发生
            imgLocation();
        }    
    });
});

function scrollside() { //滚动时
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2); //最后一张图片的中点距离顶端的距离
    // console.log(lastboxHeight);
    var documentHeight = $(window).height(); //当前浏览器所能看到的高度
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}


//第二排的第一张图片已改放在第一排的高度最小的图片的下方
function imgLocation() {
    var box = $(".box"); //创建盒子对象
    var boxWidth = box.eq(0).width(); // 获取盒子宽度，等宽的所以随便取一张图片的宽度
    var num = Math.floor($(window).width() / boxWidth); //每排可以放置的图片个数
    var boxArr = []; //创建数组用来储存每排中每个盒子的高度
    $(".content").css({
      "width":boxWidth*num+"px",
      "margin":"0 auto"
    });
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height(); //所有盒子中每个盒子的高度
        if (index < num) { //第一排的盒子
            boxArr[index] = boxHeight; //第一排每个盒子的高度
            $(value).css({
                "position": "absolute",
                "top": 0,
                "left": index * boxWidth
            });
        } else { //第二排的盒子
            var minboxHeight = Math.min.apply(null, boxArr); //获取第一排盒子的最小高度
            // console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr); //第一排高度最小盒子的位置
            // console.log(minboxIndex);
            // console.log(value);
            $(value).css({ //设置第二排图片的位置
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left //距离左边的距离和第一排中高度最小的盒子的left值一样
            });
            boxArr[minboxIndex] += box.eq(index).height(); //重新计算第一排最小高度的盒子和第二排图片放置后的整体高度
        }
    });
}
