function calculate() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var op = document.getElementById("operators").value;
    document.getElementById("result").innerHTML = result(num1, num2, op);
}

function result(x, y, op) {
    // 输入为空或者空格时执行
    x.trim();
    y.trim();
    if (x == "" || y == "" || !x.trim() || !y.trim()) {
        alert("请输入数据");
        return "请输入数据"
            // 输入数字时执行
    } else if (!isNaN(x) && !isNaN(y)) {
        num1 = Number(x);
        num2 = Number(y);
        switch (op) {
            case "+":
                return parseFloat((num1 + num2).toFixed(8));
            case "-":
                return parseFloat((num1 - num2).toFixed(8));
            case "*":
                return parseFloat((num1 * num2).toFixed(8));
            case "/":
                if (num2 !== 0) {
                    return parseFloat((num1 / num2).toFixed(8));
                } else {
                    alert("除数不能为零")
                    return "NaN";
                }
        }
    } else {
        return "NaN";
    }

}
