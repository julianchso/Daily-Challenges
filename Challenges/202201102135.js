// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  var search = s.toLowerCase();

  for (var i = 0; i < search.length; ++i) {
    var str = search.slice(0, i) + search.slice(i + 1);
    console.log(str);
    if (str.indexOf(search[i]) === -1) {
      console.log(str.indexOf(search[i]));
      return s[i];
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("strs"));
