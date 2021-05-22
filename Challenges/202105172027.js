// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = Math.ceil(Math.sqrt(num)); i > 1; i--) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
