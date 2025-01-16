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

let arr = new Array(1, "priyanshu", true, 3.14);

arr.push("Hello")
arr.pop()
arr.shift()  //removes first or the leftmost element
arr.unshift(1) //adds an element at the beginning
arr.push(2, 3, 4, 5)
// console.log(arr.slice(2,4));
arr.splice(6,2, "Rai")  //From index 6 remove 2 elements and add "Rai"
console.log(arr);
