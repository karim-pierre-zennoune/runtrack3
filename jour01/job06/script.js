"use strict";

// Si le nombre est un multiple de 3, affichez “Fizz”.
// Si le nombre est un multiple de 5, affichez “Buzz”.
// Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”.

function fizzbuzz() {
  for (let i = 1; i <= 151; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else console.log(i);
  }
}

fizzbuzz();
