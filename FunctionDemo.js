//Functions
/*
1] Positional Parameter
2] Default  Parameter
3] Rest Parameter
4] Optional Parameter

*/
//This Is a Positional Parameter, in which parameters are deppends on there sequuence
function Display(No1, No2) {
    console.log("value of no1 is : " + No1);
    console.log("value of no2 is : " + No2);
}
console.log("First Line OF Application:  ");
var A = 11;
var B = 10;
Display(A, B);
function Multiplication(A, B, C) {
    var Ans = 0;
    Ans = A * B * C;
    return Ans;
}
var No1 = 11;
var No2 = 20;
var No3 = 30;
var iRet = 0;
iRet = Multiplication(No1, No2, No3);
console.log("Multiplicationn is :" + iRet);
