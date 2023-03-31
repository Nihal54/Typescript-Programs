export

function Addition (No1 : number , No2 : number): number{

    let Ans : number = 0
    Ans = No1+ No2 
    return Ans 
}
function Substraction(No1 :number , No2 : number):number
{
    let Ans : number = 0
    Ans = No1 - No2

    return Ans
}

var A : number = 10
var B : number = 11


var iRet : number = 0

iRet = Addition(A,B)
console.log("Addition is "+ iRet)

iRet = Substraction(A,B)
console.log("sUB is "+ iRet)