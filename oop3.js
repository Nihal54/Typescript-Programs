"use strict";
//write Application which perform Addition or Substraction of two numnber
// Ky Karaych aaahe ? ; aDDITION aND sUBSTRACTION
// Aani te karnya saathi aaplyala kay laagnar ahe ? : nO1 aND nO2
// Inside Class we cant writw let or var function keyword
//inside constructor , to initialize variable we have to use "this " keyword
exports.__esModule = true;
exports.Arithmatic = void 0;
var Arithmatic = /** @class */ (function () {
    function Arithmatic(i, j) {
        this.No1 = i;
        this.No2 = j;
    }
    Arithmatic.prototype.Addition = function () {
        var ans;
        ans = this.No1 + this.No2;
        return ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var ans;
        ans = this.No1 - this.No2;
        return ans;
    };
    return Arithmatic;
}());
exports.Arithmatic = Arithmatic;
var iRet;
var obj10 = new Arithmatic(10, 11);
var obj11 = new Arithmatic(20, 21);
iRet = obj10.Addition();
console.log("Additon of two number is :" + iRet);
iRet = obj10.Substraction();
console.log("sub of two number is :" + iRet);
