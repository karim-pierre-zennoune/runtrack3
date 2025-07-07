"use strict";

function bisextile(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else return false;
}

console.log("1824: " + bisextile(1824));
console.log("1900: " + bisextile(1900));
console.log("1999: " + bisextile(1999));
console.log("2400: " + bisextile(2400));
console.log("2401: " + bisextile(2401));
