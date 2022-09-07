// https://www.codewars.com/kata/52423db9add6f6fc39000354/train/javascript

// Conway's Game of Life
// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.

function getGeneration(cells, generations) {
  if (cells === [[0, 0, 0], [(0, 0, 0)], [(0, 0, 0)]]) {
    return [[]];
  }
  const offsetx = [0, 1, 1, 1, 0, -1, -1, -1];
  const offsety = [-1, -1, 0, 1, 1, 1, 0, -1];

  const newGen = [[0, 0, 0], [(0, 0, 0)], [(0, 0, 0)]];

  n = 0;
  //   while (n < generations) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      let val = 0;
      for (let k = 0; k < 8; k++) {
        ny = i + offsety[k];
        nx = j + offsetx[k];

        if (ny < 0 || ny > 2 || nx < 0 || nx > 2) {
        } else {
          val += cells[ny][nx];
        }
      }

      if (val < 2 || val > 3) {
        newGen[i][j] = 0;
      }
      if (cells[i][j] == 1 && (val == 2 || val == 3)) {
        newGen[i][j] = 1;
      }
      if (cells[i][j] == 0 && val == 3) {
        newGen[i][j] = 1;
      } else {
        newGen[i][j] = 0;
      }
      console.log(`cells: ${j},${i}... ${cells[i][j]}`);
      console.log(`val: ${val}`);
    }
  }
  console.log(newGen);
  return newGen;
}
// n++;

getGeneration([
    [1, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
]);
