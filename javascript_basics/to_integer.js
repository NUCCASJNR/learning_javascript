const arg1 = process.argv[2];

// if (arg1 === undefined) {
//   console.log('Not a number');
// } else if (Number(arg1) !== Number) {
//   console.log('Not a number')
// } else if (Number(arg1) === Number) {
//   console.log(`My number: ${arg1}`);
// }

if (isNaN(arg1)) {
  console.log('Not a number');
} else if (typeof arg1 === 'number') {
  console.log(`My number: ${arg1}`);
}