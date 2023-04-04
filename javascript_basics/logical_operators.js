#!/usr/bin/node

// Logical operators are used to combine conditional statements

const a = 2;
const b = 3;
const c = 7;

console.log(a > b && a < b); // and
console.log(a > 8 || c == 7); // or
console.log(b > a && c > b); // and

// not returns the opposite boolean value
// of the value it is applied to
// !true = false
// !false = true
console.log(!(a > b && a > b));
