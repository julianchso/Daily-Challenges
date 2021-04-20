// https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Example:
// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

let arr = [1];

function dblLinear(n) {
  let u1;
  let u2;

  
  for (i = 0; i < arr.length; i++) {
    array.forEach((element) => {

    });
  }
  arr.forEach((val) => {
    u1 = 2 * val + 1;
    arr.push(u1);
    u2 = 3 * val + 1;
    arr.push(u2);
  });

  if (arr.length >= n) {
    return arr[n];
  }
}

console.log(dblLinear(20));
console.log(arr);
