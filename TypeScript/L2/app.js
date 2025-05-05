// 01 Getter & Setter
// 
// class Abcd{
//   public _name: string;
//   constructor(_name: string, public age: number){}
//   get name(){  //This is not a function it is a property
//     return this._name;
//   }
//   set name(value:string){ //c1.name = "Rai" we have to use it like this,not like func
//     this._name = value;
//   }
// }
// let c1 = new Abcd("priyanshu", 24)
// 02 Functions
// This is how we pass a callback function as a parameter in TypeScript
// function abcd1(name:string , cb: (value: string) => void){ 
//   cb("hello") 
// }
// abcd1("priyanshu", (value: string)=>{
//   console.log(value)
// })   
// The callback functions just logs any value that is passwed to it
// 2.1 OPtional And Default parameters
// function abcd2(name:string , gender?:string){ 
//   console.log(name)
// }
// // gender is an optional parameter we can leave it blank too by using "?"  and we can also give it a defaukt parameter by using this 
// // ******  EX. gender: string = "not to say"  ******
// abcd2("priyanshu")// The callback functions just logs any value that is passwed to it
// // 2.2 Rest parameters
// function abcd3(...val: number[]){
//   console.log(val)
// }
// // ... is a rest operator which is used to create an array of any number of elements passed in the function
// abcd3(1,2,3,4,5,6,7,8,9,10)
// 03 Generics
// It is a type of function which takes any type of data and returns any type of data
function abcd4(val) {
    console.log(val);
}
// In place of T we can put anything like P X, etc but its a convention to use T
abcd4("hello");
abcd4(10);
