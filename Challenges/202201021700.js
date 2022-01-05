// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

String.prototype.sort = function () {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  let anagramWords = [];

  words.forEach((wordInArr) => {
    let wordLetterSorted = word.sort();
    let wordArrLetterSorted = wordInArr.sort();

    if (wordLetterSorted === wordArrLetterSorted) {
      anagramWords.push(wordInArr);
    }
  });
  console.log(anagramWords);
  return anagramWords;
}

// let example = anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);
let example = anagrams("racer", ["racar", "racer", "carer"]);
// console.log(example);
