var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Data) {
        return _super.call(this, Data) || this;
    }
    CircleX.prototype.CalculateCircumference = function () {
        var Ans = 0;
        Ans = 2 * this.pi * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj = new CircleX(10.7);
var iRet = 0;
iRet = obj.CirculateArea();
console.log("Area is :" + iRet);
iRet = obj.CalculateCircumference();
console.log("Circumference is " + iRet);
