//Optional Parameter
function AreaOfCircle(Radius, Pi) {
    var Ans = 0;
    if (Pi == undefined) {
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
