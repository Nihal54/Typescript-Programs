function Addition(..Arr : number[] ):number




{

    let sum : number = 0
    var iCnt : number = 0
    for(iCnt = 0; iCnt < Array.length ; iCnt ++)
    {

        sum = sum + Arr[iCnt ]d

       


    }
    return sum




}
var Ret : number = 0
var MyData : number[] = [10,20,30,40]

// Ret = Addition(MyData): not allowed
console.log("Addition is :"+Ret)


Ret = Addition(10,20,30,40)



