var Circle = /** @class */ (function () {
    function Circle(R, p) {
        this.Radius = R;
        this.pi = 3.14;
    }
    Circle.prototype.CirculateArea = function () {
        var Ans = 0;
        Ans = this.pi * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(10.7);
var iRet = 0;
iRet = obj.CirculateArea();
console.log("Area is :" + iRet);
