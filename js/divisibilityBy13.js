// A Rule of Divisibility by 13 - 6 kyu

function thirt(n) {
  const remainders = [1, 10, 9, 12, 3, 4];
  let sum = n;
  while (true) {
    let check = sum;
    sum = sum
      .toString()
      .split("")
      .reverse()
      .join("")
      .split("")
      .map((v, i) => {
        v = v * remainders[i % 6];
        return v;
      })
      .reduce((a, b) => a + b, 0);
    if (sum == check) {
      break;
    }
  }
  return sum;
}

thirt(8529);
// expected 79
