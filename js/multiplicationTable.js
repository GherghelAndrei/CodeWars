/* Create Multiplication Table 
 1 2 3
 2 4 6 
 3 6 9
*/

multiplicationTable = function (size) {
  let table = [];
  let numbers = [...new Array(size)].map((_nr, index) => index + 1);
  for (let i = 0; i < size; i++) {
    var row = [];
    for (let j = 0; j < size; j++) {
      if (j == 0) {
        row.push(i + 1);
      } else if (i == 0) {
        row.push(j + 1);
      } else {
        row.push(numbers[i] * numbers[j]);
      }
    }
    table.push(row);
  }
  return table;
};

// edgy
const multiplicationTable2 = (size) =>
  [...Array(size)].map((_, idx) =>
    [...Array(size)].map((_, i) => ++i * (idx + 1))
  );

multiplicationTable(3);
// Expected [[1,2,3], [2,4,6], [3,6,9]]
