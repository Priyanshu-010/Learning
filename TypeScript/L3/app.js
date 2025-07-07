"use strict";
// const form = document.querySelector('form') as HTMLFormElement;
// let input = document.querySelector('form input') as HTMLInputElement;
Object.defineProperty(exports, "__esModule", { value: true });
var boy = {
    name: "priyanshu",
    age: 24
};
var people = [boy];
console.log(people);
var greet = function (name) {
    return "hello ".concat(name);
};
var ans = greet("priyanshu");
console.log(ans);
