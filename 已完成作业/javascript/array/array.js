function calculate() {
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    var count = {};
    var position = {};
    // 遍历arr，统计每个字母出现次数且记录位置
    arr.forEach(function(value, index, array) {

        if (count[value]) {
            count[value]++;
            position[value] += "," + index;
        } else {
            count[value] = 1; //count{a:1}
            position[value] = index; //position{a:0}
            console.log(count);
        }
    });
    console.log(count);
    console.log(position);

    //获取出现最多的字母
    var max = 0;
    var letter;
    for (i in count) {
        if (count[i] > max) {
            max = count[i];
            letter = i;
            // console.log(letter+":"+count[letter]);
        }

    }
    console.log("最多的是：" + letter);
    console.log("出现次数是：" + count[letter]);
    console.log("位置分布：" + position[letter]);

    document.getElementById("max").innerHTML = "最多的是：" + letter;
    document.getElementById("count").innerHTML = "出现次数是：" + count[letter];
    document.getElementById("position").innerHTML = "位置分布：" + position[letter];
}

//定义对象和获取对象的内容
function pre() {
    var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    var object={};
    var obj = { "a": 1, b: "2", 0: 3, 0.7: 4, k: "name" }; //键可以不加引号  值为字符串时要引号
    console.log(obj.k); //name
    console.log(obj.b) // 2(这是字符串的2)
    console.log(obj["a"]); //数字1
    console.log(obj[0.7]); //数字4
    obj.age = 2; //对象obj加age项
    console.log(obj); //obj={"a": 1, b: "2", 0: 3, 0.7: 4, k: "name",age: 2}
   
   	if(object["a"]){
    	console.log("true");
    }else{
    	object["a"]=1;
    	console.log("false");//false
    }
    console.log(object);//object{a:1}
    if(object["a"]){
    	console.log("true");//true
    }else{
    	object["a"]=1;
    	console.log("false");
    }
    


    // var result = document.getElementById("result");
    // for (var i = 0; i < arr.length; i++) {
    //     for (var j = i + 1; j < arr.length; j++) {
    //         if (arr[i] == arr[j]) {
    //             console.log(arr[j] +":"+ j);
    //         }
    //     }
    // }
}
