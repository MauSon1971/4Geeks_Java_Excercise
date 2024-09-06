/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumbers(anyArray) {
  let min = 0;
  let max = anyArray.length - 1;
  let random = randomNum(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML =
    getRandomNumbers(who) +
    " " +
    getRandomNumbers(action) +
    " " +
    getRandomNumbers(what) +
    " " +
    getRandomNumbers(when);
};
