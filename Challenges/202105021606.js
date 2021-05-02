// https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

function rank(st, we, n) {
  let nameArr = st.split(",");
  let nameNum = {};
  if (!st) {
    return "No participants";
  }
  if (n > nameArr) {
    return "";
  }

  for (i = 0; i < nameArr.length; i++) {
    let nameSum = 0;
    for (j = 0; j < nameArr[i].length; j++) {
      console.log(nameArr[i][j])
      nameSum += nameArr[i][j].toLowerCase().charCodeAt(0) - 96;
    }
    nameNum[nameArr[i]] = nameSum;
  }

  console.log(nameNum);

  for (i = 0; i < nameNum.length; i++) {
    nameNum[i] = nameNum[i] * we[i];
  }
}

// rank(
//   "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
//   [4, 2, 1, 4, 3, 1, 2],
//   4
// );

rank("Paul", [4], 4);
