//Optional Parameter  &  Default Parameter
function AreaOfCircle(Radius, Pi) {
    if (Pi === void 0) { Pi = 3.14; }
    var Ans = 0;
    if (Pi == undefined) //undefined,null,any,void
     {
        Pi = 3.14;
    }
    Ans = Pi * Radius * Radius;
    return Ans;
}
var Ret = 0;
Ret = AreaOfCircle(20.3, 3.14);
console.log("Area of Circle is " + Ret);
Ret = AreaOfCircle(20.3);
console.log("Area of Circle is " + Ret);
Ret = AreaOfCircle(20.3, 7.12);
console.log("Area of Circle is " + Ret);
