"use strict";

function sommenombrespremiers(a, b) {
  for (let i = 2, s = Math.sqrt(a); i <= s; i++) {
    if (a % i === 0) return false;
  }

  for (let i = 2, s = Math.sqrt(b); i <= s; i++) {
    if (b % i === 0) return false;
  }

  return a + b;
}

console.log(sommenombrespremiers(5, 5));
console.log(sommenombrespremiers(5, 6));
console.log(sommenombrespremiers(26000, 0));
console.log(sommenombrespremiers(0, 0));
