function calculate() {
    var score = document.getElementById("score").value;
    var level = document.getElementById("level");
    if (isNaN(score)) {
        alert("请输入0-100的数");
    } else if (!score.trim()) {
        alert("数值为空，请输入0-100的数");
    } else if (score > 100 || score < 0) {
        alert("分数不合理！请输入0-100的数");
    } else if (score >= 90) {
        alert("该生为1等生");
        level.innerHTML = "1";
    } else if (score >= 80) {
        alert("该生为2等生");
        level.innerHTML = "2";
    } else if (score >= 70) {
        alert("该生为3等生");
        level.innerHTML = "3";
    } else if (score >= 60) {
        alert("该生为4等生");
        level.innerHTML = "4";
    } else {
        alert("该生为5等生");
        level.innerHTML = "5";
    }
}
