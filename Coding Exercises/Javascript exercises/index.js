//   Promise

// let prom1 = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });


// prom1.then((message)=>{
//   console.log(message);
// }).catch((error)=>{
//   console.log(error)
// }).finally((message)=>{
//   console.log(message)
// })



// fetch API with Async await


// async function getData() {
//   //async code
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   //async code
//   let data = await response.json();
//   console.log(data);
// }

// getData();


// Fetch API for POST method

// const myHeaders = {
//   "Content-Type": "application/json"
// }

// const url = "https://jsonplaceholder.typicode.com/posts"
// const option = {
//   method: "POST",
//   body: JSON.stringify({
//     username: "Priyanshu Rai",
//   }),
//   headers: myHeaders
// }

// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log("Get data: ", data)
// }


// async function postData() {
//   const response = await fetch(url, option);
//   const data = await response.json();
//   console.log("Post Data: ", data)
// }


// async function process() {

//   await postData();

//   await getData();
// }

// process();

// Callback function 
// A function passed as an argument/parameter to another function is called as a callback function
// function doSomething(callback) {
//   console.log("Doing something...");
//   callback(); // Callback is executed here
// }

// function myCallback() {
//   console.log("Callback executed!");  
// }

// doSomething(myCallback);


//Arrays

// let arr = new Array(1, "priyanshu", true, 3.14);

// arr.push("Hello")
// arr.pop()
// arr.shift()  //removes first or the leftmost element
// arr.unshift(1) //adds an element at the beginning
// arr.push(2, 3, 4, 5)
// console.log(arr.slice(2,4));
// arr.splice(6,2, "Rai")  //From index 6 remove 2 elements and add "Rai"
// console.log(arr);


// Map
//Always use return in the function

// const arr1 =[1,2,3,4,5];
// const ans = arr1.map((value) =>{
//   value = value * value;
//   return value
//  })
// console.log(ans)

// arr1.map((value, index)=>{
//   console.log(value, index)
// })


// Filter

// const arr1 =[1,2,3,4,5];
// let ans = arr1.filter((value)=>{
//   if(value % 2 === 0){
//     return true
//   }else{
//     return false
//   }
// })

// console.log(ans)

// let arr = [1, "priyanshu", 2, "Rai"]
// const ans = arr.filter((value)=>{
//   if(typeof(value) === "string" ){
//     return true
//   }
// })
// console.log(ans)

// Reduce

// let arr = [10,20,30,40];
// let ans = arr.reduce((acc, value)=>{
//   acc = acc + value;
//   return acc
// }, 0) //Intializing the value of accumulator by 0 
//acc + value(current value or curr)
//0 + 10
//10 + 20
//30 + 30
//60 + 40 
// console.log(ans)

//Sort 

//Ascending Order

// let arr = [10, 1, 20, 5, 40, 15];
// let ans = arr.sort((a, b)=>{
//   return a - b; 
// }) 
// console.log(ans)

// Descending Order

// let arr = [10, 1, 20, 5, 40, 15];
// let ans = arr.sort((a, b)=>{
//   return b - a; 
// }) 
// console.log(ans)

//indexOf

// let arr = [10, 1, 20, 5, 40, 15];
// let ans = arr.indexOf(20);
// console.log(ans)

// Find

// let arr = [10, 1, 20, 5, 40, 15];
// let ans = arr.find((value)=>{
//   value = value < 20
//   return value
// })
// console.log(ans)

//forEach

// let arr = [10, 20, 30, 40];
// let ans  = arr.forEach((value)=>{
//   value = value * 2
//   console.log(value)
// })

// arr.forEach((value, index)=>{
//   console.log(`${value} is at index ${index}`)
// })

// Traditional For loop

// let arr = [10, 20, 30, 40];
// for (let i = 0; i <arr.length; i++){
//   console.log(arr[i])
// }

// For in loop

// let person = {
//   name: "Priyanshu",
//   age: 24,
//   hobbies: ["Coding", "Reading", "Gaming"]
// }
// for(let key in person){
//   console.log(key + ": " + person[key])//person[key] prints the value of key
// }

//for of loop

// let arr = [10, 20, 30, 40];

// for(let value of arr){
//   console.log(value)
// }

// let fullName = "Priyanshu Rai";
// for(let val of fullName){
//   console.log(val)
// }

// Arrays with functions

// let arr = [10, 20, 30, 40];

// function sum(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//   }
//   console.log(sum)
// }

// sum(arr)

const arr =[
  {firstName: "Priyanshu", lastName: "Rai", age: 24},
  {firstName: "Aashu", lastName: "Rai", age: 22},
  {firstName: "john", lastName: "doe", age: 21},
  {firstName: "Alice", lastName: "doe", age: 21},
]

// const ans = arr.map((val)=>{
//   return val.firstName + " " + val.lastName
// })

// console.log(ans)

// const ans = arr.filter((val)=>{
//   if (val.age >21){
//     return true;
//   }
// })

// console.log(ans)