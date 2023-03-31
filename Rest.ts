//Rest Parameter or Varibles 

// ... is known as Ecllips

function Addition (...Arr : number []): number 


{

    let sum : number = 0
    var iCnt : number = 0
    for(iCnt = 0; iCnt < Array.length ; iCnt ++)
    {

        sum = sum + Arr[iCnt ]

       


    }
    return sum




}
var Ret : number = 0

Ret = Addition(10,20)
console.log("Addition is :"+Ret)


Ret = Addition()
console.log("Addition is :"+Ret)


Ret = Addition(10,20,30,40)
console.log("Addition is :"+Ret)


Ret = Addition(10,20,30,40,50,60)
console.log("Addition is :"+Ret)