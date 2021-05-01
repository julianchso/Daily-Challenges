// https://www.codewars.com/kata/59c27053dcc40582a90000f0/train/javascript
// Write a function that outputs:

// 0
// 010
// 01210
// 0123210
// 012343210
// 01234543210
// 0123456543210
// 012345676543210
// 01234567876543210
// 0123456789876543210
// 01234567876543210
// 012345676543210
// 0123456543210
// 01234543210
// 012343210
// 0123210
// 01210
// 010
// 0

// Instructions:
// Code must be less than or equal to 100 characters.
// Code can't contain any other numeric character except 1 and 0. That is characters 2 - 9 not allowed!

// counter = 0
// add digit to line
// increment digit
// if digit equals line number, decrement digit
// if digit equals 0, console.log new line and start over

function p() {
  let lineCount = 0;
  let digit = "0";
  for (i = 1; i < 10; i++) {
    digit += i.toString();
    console.log(digit)
    lineCount++;  
    if (Number(digit) === lineCount) {
      for (i = lineCount; i >= 0; i--) {
        console.log(digit)
      }
    } 
  }
  for (i = 8; i >= 0; i--) {
    digit += i.toString();
    console.log(digit)

    if (Number(digit) === lineCount) {
      console.log("\n");
    } else {

    }
  }
}

p();
