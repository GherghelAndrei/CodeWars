function pascal(depth) {
  let triangle = [[1]];
  let prevRow = [1];
  // decrement one because we start with [[1]]
  let n = depth - 1;
  while (n) {
    let row = [1];
    if (prevRow.length == 1) {
      row.push(1);
    }
    if (prevRow.length > 1) {
      for (let index = 0; index < prevRow.length - 1; index++) {
        row.push(prevRow[index] + prevRow[index + 1]);
      }
      row.push(1);
    }
    n -= 1;
    triangle.push(row);
    prevRow = Object.assign([], row);
  }
  return triangle;
}

pascal(5);
// expect [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
