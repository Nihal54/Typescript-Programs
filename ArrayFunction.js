function addition(Arr) {
    var Sum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Week.length; iCnt++) {
        Sum = Sum + Week[iCnt];
    }
    return Sum;
}
var Week = [10, 20, 30, 40, 50];
var iRet = 0;
iRet = addition(Week);
console.log("Addition of Array Is :" + iRet);
