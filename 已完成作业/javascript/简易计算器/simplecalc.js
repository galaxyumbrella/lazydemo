var num = 0,
    reult = 0,
    numshow = 0;
var operate = 0; //判断输入状态的标志 
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志

var res = document.getElementById("result"); //得到显示框对象
var btn_num = document.getElementsByClassName("btn_num"); //得到数字对象
for (var i = 0; i < btn_num.length; i++) {
    btn_num[i].onclick = function() {
        command(this.value);
    }
}

function command(num) { //追加数字
    var str = String(res.value);
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
    str = str + String(num); //给当前值追加字符 
    res.value = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志  
}

document.getElementById("point").onclick = function() { //不重复点号
    var str = String(res.value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substring(i, 1) == ".") { //如果有则不再插入 
            return false;
        }
    }
    str = str + ".";
    res.value = str;
    operate = 0;//重置输入状态
}



document.getElementById("back").onclick = function() { // 退格
    res.value = res.value.substring(0, res.value.length - 1);
}

document.getElementById("clear").onclick = function() { // 清除数据
    res.value = "0";
    num = 0;
    result = 0;
    numshow = "0";
}
document.getElementById("power").onclick = function() { // 平方
    res.value = Math.pow(res.value, 2);
}

document.getElementById("add").onclick = function() { //加法
    calculate(); //调用计算函数
    operate = 1; //更改输入状态
    calcul = "+"; //更改计算状态为加 
}

document.getElementById("minus").onclick = function() { //减法
    calculate();
    operate = 1;
    calcul = "-";
}

document.getElementById("multiply").onclick = function() { //乘法
    calculate();
    operate = 1;
    calcul = "*";
}

document.getElementById("divide").onclick = function() { //除法
    calculate();
    operate = 1;
    calcul = "/";
}

document.getElementById("enter").onclick = function() { //等于
    calculate();
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}

function calculate() { //算法
    numshow = Number(res.value);
    if (num != 0 && quit != 1) {
        switch (calcul) {
            case "+":
                result = parseFloat((num + numshow).toFixed(8));
                break;
            case "-":
                result = parseFloat((num - numshow).toFixed(8));
                break;
            case "*":
                result = parseFloat((num * numshow).toFixed(8));
                break;
            case "/":
                if (numshow != 0) {
                    result = parseFloat((num / numshow).toFixed(8));
                } else {
                    alert("除数不能为零！");
                }
        }
        quit = 1; //避免重复按键
    } else {
        result = numshow;
    }
    numshow = String(result);
    res.value = numshow;
    num = result;
}
