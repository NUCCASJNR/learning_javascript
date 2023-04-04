#!/usr/bin/python3

// This function takes in two numbers and returns the multiplication

function mul (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Both inputs must be numbers');
  } else {
    console.log('The multiplication of ' + a + ' and ' + b + ' is ' + (a * b));
  }
}

mul(9, 2);
