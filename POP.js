function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var A = 10;
var B = 11;
var iRet = 0;
iRet = Addition(A, B);
console.log("Addition is " + iRet);
iRet = Substraction(A, B);
console.log("Addition is " + iRet);
