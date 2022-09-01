// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

const numericTime = [];
const InSeconds = {
  year: 31536000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};
const durationName = ["year", "day", "hour", "minute", "second"];

function formatDuration(seconds) {
  for (duration in InSeconds) {
    durationNum = Math.floor(seconds / InSeconds[duration]);

    if (durationNum < 1) {
      numericTime.push(0);
      seconds %= InSeconds[duration];
    } else {
      numericTime.push(durationNum);
      seconds %= InSeconds[duration];
    }
  }
  str = "";
  numericTime.forEach((durationNum, i) => {
    once = false;
    // console.log(i);
    // console.log(numericTime.length - 1);
    if (numericTime[i] == 0) {
    } else {
      if (i != numericTime.length - 1) {
        str += ", ";
      } else {
        str += " and ";
      }
      str += durationNum + " " + durationName[i];
      if (numericTime[i] > 1) {
        str += "s";
      }
    }
  });
  str = str.substring(2, str.length);
  console.log(numericTime);
  console.log(str);
  return str;
}

formatDuration(11231231702);
