//Optional Parameter  &  Default Parameter
function AreaOfCircle(Radius : number , Pi  : number=3.14): number 

{
    let Ans : number = 0

    
    if(Pi== undefined )         //undefined,null,any,void
    {

        Pi=3.14
    }

    Ans = Pi * Radius*Radius


    return Ans
}

var Ret : number =0

Ret = AreaOfCircle(20.3,3.14)
console.log("Area of Circle is "+Ret)


Ret = AreaOfCircle(20.3)
console.log("Area of Circle is "+Ret)


Ret = AreaOfCircle(20.3,7.12)
console.log("Area of Circle is "+Ret)

