document.getElementById("skin-items").style.display = "none"; //隐藏皮肤选项
document.getElementById("changeskin-btn").onclick = function() { //显示皮肤选项
    document.getElementById("skin-items").style.display = "block";
}
document.getElementById("close-changeskin").onclick = function() { //关闭按钮
    document.getElementById("skin-items").style.display = "none";
}

var name = localStorage.skinName; //打开网页读取数据
if (name) { //如果name有值执行代码
    changeBgimage(name);
}

function changeBgimage(idName) {
    var wrapperbg = document.getElementsByClassName("wrapper")[0];
    wrapperbg.id = idName;
    localStorage.skinName = idName; //存储数据
}

// localStorage.setItem("key","value");//存储变量名为key，值为value的变量;  

// localStorage.key = "value"//存储变量名为key，值为value的变量;  

// 获取值:

// var Str=localStorage.getItem("key");//获取存储的变量key的值;

// var Str=localStorage.key;//获取存储的变量key的值;  

// 删除:

// localStorage.removeItem("key")//删除变量名为key的存储变量;  

// **JS操作的时候在所有方法前面加上window即可

// var skinbtn = document.getElementsByClassName("skin-img");
// console.log(skinbtn);
// for (var i = 0; i < skinbtn.length; i++) { //点击更换背景图片
//     skinbtn[i].index = i; //获取每个背景的索引值
//     skinbtn[i].onclick = function(e) {
//         // console.log(e);
//         // console.log(this.index);
//         var wrapperbg = document.getElementsByClassName("wrapper")[0];
//         switch (this.index) {
//             case 0:
//                 wrapperbg.style.background = "url(img/ali-bg.jpg)";
//                 break;
//             case 1:
//                 wrapperbg.style.background = "url(img/spring-bg.jpg)";
//                 break;
//             case 2:
//                 wrapperbg.style.background = "url(img/clover-bg.jpg)";
//                 break;
//             case 3:
//                 wrapperbg.style.background = "url(img/pugongying-bg.jpg)";
//                 break;
//             case 4:
//                 wrapperbg.style.background = "url(img/purplemagic-bg.jpg)";
//                 break;
//             case 5:
//                 wrapperbg.style.background = "url(img/paperplane-bg.jpg)";
//                 break;
//         }
//     }
// }
