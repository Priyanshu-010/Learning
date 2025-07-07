// const form = document.querySelector('form') as HTMLFormElement;
// let input = document.querySelector('form input') as HTMLInputElement;

import { get } from "http";

// form.onsubmit = (e) =>{
//   e.preventDefault();
//   const value = Number(input.value);
//   const p = document.createElement('p');
//   p.innerText = String(value + 20);
//   form.appendChild(p);
// }

type person = {
  name: string;
  age: number;
}

const boy: person = {
  name: "priyanshu",
  age: 24
}

const people : Array<person>= [boy];
console.log(people)


const greet = (name: string): string =>{
  return `hello ${name}`;
} 

const ans = greet("priyanshu");
console.log(ans)
