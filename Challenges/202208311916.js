// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  const numericTime = [];
  const InSeconds = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  if (seconds === 0) return "now";

  const durationName = ["year", "day", "hour", "minute", "second"];
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
  console.log(numericTime)

  str = "";
  numericTime.forEach((durationNum, i) => {
    if (numericTime[i] == 0) {
    } else {
      console.log(durationNum)

      str += durationNum + " " + durationName[i];
      console.log(str)
      if (numericTime[i] > 1) {
        str += "s";
      }
      str += ", "
    }
  });
  str = str.substring(0, str.length - 2);
  console.log(str);
  str = str.replace(/,([^,]*)$/, " and" + '$1')
  console.log(numericTime);
  console.log(str);
  return str;
}

formatDuration(62);