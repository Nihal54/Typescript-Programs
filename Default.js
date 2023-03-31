//Percentage calculation using typecript
function Percentage(Mark, OutOf) {
    if (Mark === void 0) { Mark = 400; }
    if (OutOf === void 0) { OutOf = 500; }
    var Ans = 0;
    Ans = (Mark / OutOf) * 100;
    return Ans;
}
var per = 0;
per = Percentage(220, 300);
console.log("Percentage is :" + per);
per = Percentage(220);
console.log("Percentage is :" + per);
per = Percentage();
console.log("Percentage is :" + per);
