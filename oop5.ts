class Circle
{
    Radius : number 
    pi : number 

    constructor(R: number , p ? : number )
    {
        this.Radius = R
        this.pi = 3.14
    }

    CirculateArea() : number 
    {
        let Ans : number = 0
        Ans = this.pi * this.Radius * this.Radius
        return Ans
    }



}
class CircleX extends Circle
{

    constructor(Data: number )
    {
        super(Data)


    }
    CalculateCircumference() : number 

    {

        let Ans : number = 0

        Ans = 2 * this.pi * this.Radius

        return Ans 
    }
}


var obj = new CircleX(10.7)

var iRet : number = 0
iRet = obj.CirculateArea()

console.log("Area is :"+iRet)

iRet = obj.CalculateCircumference()
console.log("Circumference is "+iRet)

