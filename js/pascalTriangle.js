function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  let array = [];
  let prevArray = [];
  while (n) {
    let row = [];
    row.push(1);
    if (prevArray.length == 1) {
      row.push(1);
    }
    if (prevArray.length > 1) {
      for (let i = 0; i < prevArray.length - 1; i++) {
        row.push(prevArray[i] + prevArray[i + 1]);
      }
      row.push(1);
    }
    n -= 1;
    prevArray = Object.assign([], row);
    array.push(...row);
  }
  return array;
}
pascalsTriangle(4);
// expect [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]
