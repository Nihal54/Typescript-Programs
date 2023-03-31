//Functions

/*
1] Positional Parameter
2] Default  Parameter
3] Rest Parameter
4] Optional Parameter

*/

//This Is a Positional Parameter, in which parameters are deppends on there sequuence

function Display(No1: number , No2 : number ):void

{

    console.log("value of no1 is : "+ No1)
    console.log("value of no2 is : "+ No2)


}
console.log("First Line OF Application:  ")
var A : number = 11
var B : number = 10
Display(A,B)

function Multiplication(A: number , B: number , C : number): number
{

    let Ans : number = 0
    
    Ans = A*B*C;

    return Ans 
}

var No1 : number = 11
var No2 : number = 20
var No3 : number = 30

var iRet : number = 0;

iRet = Multiplication(No1, No2, No3)
console.log("Multiplicationn is :"+iRet)