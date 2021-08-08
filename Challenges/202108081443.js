// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Pig latin is cool -> igPay atinlay siay oolcay

function pigIt(str) {
  const myArr = str.split(" ");

  const newArr = myArr.map((word) => {
    if (/[,.!?\-]/.test(word)) {
      return word;
    } else {
      firstLetter = word[0];
      word = word.substring(1) + firstLetter + "ay";
      return word;
    }
  });

  const PigLatin = newArr.join(" ");
  return PigLatin;
}

pigIt("Pig latin is cool");
