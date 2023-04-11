// function exampleLet() {
//     let x = 1;
  
//     if (true) {
//       let x = 2;
//       console.log(x); // 2
//     }
  
//       console.log(x); // 1
  
//     x = BigInt(3);
//     console.log(x); // 3
      
//   }
//   exampleLet()

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skip iteration if i equals 2
  }
  if (i === 4) {
    break; // exit loop if i equals 4
  }
  console.log(i);
}
