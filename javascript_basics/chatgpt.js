#!/usr/bin/node
const readline = require('readline-sync');
const first_number = readline.question('Enter the first number: ');
const second_number = readline.question('Enter the second  number: ')


if (first_number > second_number) {
  console.log(`${first_number} is greater than ${second_number}`);
}  else if (second_number > first_number) {
  console.log(`${second_number} is greater than ${first_number}`);
} else if (first_number == second_number)  {
  console.log(`${first_number} equals ${second_number}`);
}  else  {
  console.log('invalid input')
}