// https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

function rank(st, we, n) {
  let nameArr = st.split(",");
  let nameNum = {};
  let nameScore = [];

  if (!st) {
    return "No participants";
  }
  if (n > nameArr.length) {
    return "Not enough participants";
  }

  for (i = 0; i < nameArr.length; i++) {
    let nameSum = 0;
    for (j = 0; j < nameArr[i].length; j++) {
      nameSum += nameArr[i][j].toLowerCase().charCodeAt(0) - 96;
    }
    nameSum += nameArr[i].length;
    nameSum *= we[i];
    nameNum[nameArr[i]] = nameSum;
  }

  for (i = 0; i < nameNum.length; i++) {
    nameNum[i] = nameNum[i] * we[i];
  }

  for (i = 0; i < Object.keys(nameNum).length; i++) {
    nameScore.push(nameNum[nameArr[i]]);
  }

  nameScore.sort((a, b) => b - a);

  let nValue = nameScore[n - 1];
  console.log(nValue);
  let participant = Object.keys(nameNum).find((key) => nameNum[key] === nValue);
  console.log(participant);
  console.log(nameNum);
  return participant;
}

// console.log(
//   rank(
//     "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
//     [4, 2, 1, 4, 3, 1, 2],
//     4
//   )
// );
// // output: Benjamin

// console.log(rank("Lagon,Lily", [1, 5], 2))
// // output: "Lagon"

// console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8))
// // output: "Not enough participants"

// console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6))
// // output: no participants

console.log(rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 1));