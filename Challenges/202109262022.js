// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  newStr = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      newStr = newStr;
      console.log("dash");
    } else if (str[i - 1] === "_" || str[i - 1] === "-") {
      newStr = newStr.concat(str[i].toUpperCase());
    } else {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

// console.log(toCamelCase("CAM-EL"));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_stealth_warrior"));
