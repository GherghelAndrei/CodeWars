/*
 * Given a List [] of n integers , find minimum number to be inserted in a list,
 * so that sum of all elements of list should equal the closest prime number .
 */

function minimumNumber(numbers) {
  const sumOfNumbers = numbers.reduce((a, b) => a + b, 0);
  for (let i = 0; ; i++) {
    if (isPrime(sumOfNumbers + i)) {
      return i;
    }
  }
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

minimumNumber([3, 1, 2]);
// expect 1
