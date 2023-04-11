#!/usr/bin/node

// The throw statement allows you to create a custom error.
// Syntax
// throw expression;

function divide (a, b) {
  if (b == 0) {
    throw new Error('Cannot divide by zero');
  }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

try {
    const ret = divide(10, 2)
    console.log(ret);
} catch (error) {
    console.log(error.message);
}
