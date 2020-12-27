/*
 * your function calculates 1000 iterations and 3.140592653839794 but returns:
 * iter_pi(0.001) --> [1000, 3.1405926538]
 */

function iterPi(epsilon) {
  let n = 1;
  let approx = 4;
  while (Math.abs(approx - Math.PI) > epsilon) {
    n += 1;
    approx += (n % 2 == 0 ? -4 : 4) / (n * 2 - 1.0);
  }
  return [n, parseFloat(approx.toFixed(10))];
}
