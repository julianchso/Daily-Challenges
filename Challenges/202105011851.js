function validSpacing(str) {
  if (str[0] === " " || str[str.length - 1] === " ") {
    return false;
  }
  for (i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] === " ") {
      return false;
    }
  }
  return true;
}

console.log(validSpacing("helloworld"));
console.log(validSpacing(" helloworld"))
console.log(validSpacing("helloworld "))
console.log(validSpacing("hello world"))
console.log(validSpacing("hello  world "))
