/*
 * 输入的字符串
 */



 // indexOf()方法介绍　　返回某个指定的字符串值在字符串中首次出现的位置，若检索不到返回-1
 // charAt()方法介绍　　返回某个指定位置的字符
function string() {
    var string = document.getElementById('string').value;
    string = string.trim();
    if (string == '') {
        alert('请输入一串内容');
    } else {
        var obj = {};
        for (var i = 0, length = string.length; i < length; i++) {
            var char = string.charAt(i);
            if (obj[char]) {
                obj[char]++; //次数加1
            } else {
                obj[char] = 1; //若第一次出现，次数记为1
            }
        }
        //遍历对象，找到出现次数最多的字符的次数
        var max = 0;
        var indexNum = new Array();//存储下标的数组
        var num = 0;//计数
        for (var key in obj) {
            if (max < obj[key]) {
                max = obj[key]; //max始终储存次数最大的那个
            }
        }
        for (var key in obj) {
            if (obj[key] == max) {
                //console.log(key);
                console.log("最多的字符是" + key);
                console.log("出现的次数是" + max);
                var index = -1; //定义变量index控制索引值
                //当查找不到a，即indexOf()的值为-1时，结束循环
                do {
                    index = string.indexOf(key, index + 1); //使用第二个参数index+1，控制每一次查找都是从上一次查找到字符a的下一个索引位置开始
                    if (index != -1) { //可以找到字符i
                    	indexNum[num] = index;
                    	num ++;
                    }
                } while (index != -1);
                console.log("出现的下标是" + indexNum); //输出a的位置
                indexNum = [];//清空
                num = 0;//从新计数
            }
        }
    }
}
