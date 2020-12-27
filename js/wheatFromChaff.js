/*
 * Given a sequence of n integers , separate the negative numbers (chaff) from positive ones (wheat).
 */

function wheatFromChaff(values) {
  for (let head = 0, tail = values.length - 1; head < tail; ) {
    while (values[head] < 0) head++;
    while (values[tail] > 0) tail--;
    if (head < tail)
      [values[tail], values[head]] = [values[head], values[tail]];
  }
  return values;
}
