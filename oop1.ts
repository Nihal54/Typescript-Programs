// class = Data + function
// class = Characteristics + behaviour

class Student
{
    //Characteristics
    Name : string
    Marks : number
    Age : number 
    City : string

    //Constructor
    constructor(N : string , M: number , A: number , C :string)

    {
        console.log("Inside Constructor")
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;

    }
    //Behaviour
    Display() : void 
    {
        console.log("Inside Behaviour")
       
console.log("Name Of Student is :"+ this.Name)
console.log("Marks of student "+this.Marks)
console.log("Age of Student is :"+this.Age)
console.log("City of Student is "+ this.City)
    }

}
var obj1 = new Student("Nihal",98,21,"Jamkhed")
var obj2 = new Student("Appa",95,21,"Omerga")
var obj3 = new Student("Rohit",94,21,"AhmedNagar")
var obj4 = new Student("Abhi",98,21,"Karnatak")

obj1.Display()
obj2.Display()
obj3.Display()
obj4.Display()
