/*
 * Given u0 = 1, u1 = 2 and the relation 6unun+1-5unun+2+un+1un+2 = 0 calculate un for any integer n >= 0.
 * Example
 * fcn(n) returns un: fcn(17) -> 131072, fcn(21) -> 2097152
 */

function fcn(n) {
  return 2 ** n;
}

fcn(17);
// Expect: 131072
