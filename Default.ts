//Percentage calculation using typecript



function Percentage(Mark : number=400 , OutOf: number=500 ): number
{

    let Ans : number = 0
    Ans =( Mark / OutOf) *100

    return Ans
}

var per : number = 0
per =Percentage(220,300)

console.log("Percentage is :"+per)


per =Percentage(220)
console.log("Percentage is :"+per)

per =Percentage()
console.log("Percentage is :"+per)

