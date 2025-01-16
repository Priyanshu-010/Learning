console.log("Hello WOrld")

const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonHandler);

function buttonHandler() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send();

  //Shows that the request is in progress
  xhr.onprogress = function (){
    console.log("On Progress")
  }

  // This is a Function that is called when the request is received from the server or the link in this function the 'this' keyword represents the current xhr object and the 'responseText' is the data in string format
  xhr.onload = function (){
    if(this.status === 200){
      console.log(this.responseText);
    }else{
      console.log("Something went wrong ")
    }
  }
}

console.log("we are done")

const backupBtn = document.getElementById('postBtn');

postBtn.addEventListener('click', postHandler);

function postHandler(){
  console.log("post Button Clicked")

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

  //this sets the header
  xhr.setRequestHeader('Content-type', 'application/json');

  //this is the data that is going to be posted
  const data = JSON.stringify({title: 'foo', body: 'bar', userId: 1});
  console.log(data)
  //we sent the data to the server
  xhr.send(data);
}