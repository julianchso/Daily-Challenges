// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; 
// These letters will be prefixed by the number of the string where they appear with their maximum value and :.
// If the maximum is in s1 as well as in s2 the prefix is =:.

// example output: 1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg


function mix(s1, s2) {
  
}

function countLetters(str) {
  letterStorage = {}
  regex = [a-z]
  for (let i = 0; i < str.length; i++) {
    // if (str[i] in letterStorage && str[i] == str[i].toLowerCase()) {
    if (str[i] in letterStorage && str[i].search(regex)) {
      // console.log(`lowercase`)
      letterStorage[str[i]]++;
    } else if (str[i].search(regex)) {
      // console.log(`firstLetter`)
      letterStorage[str[i]] = 1;
    }
  }
  return letterStorage;
}

console.log(countLetters('AAA BBB bbb ccc'))
console.log(countLetters('A BBB BB bbb c a'))
// count number of lower case letters and store them in a dictionary.

// compare dictionary1 with dictionary2
// make new dictionary
// if key in dictionary1 is in dictionary2, pick greater.
// Push to string