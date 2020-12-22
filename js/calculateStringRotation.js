/* 
    "coffee", "eecoff" => 2
    "eecoff", "coffee" => 4
    "moose", "Moose" => -1
    "isn't", "'tisn" => 2
    "Esham", "Esham" => 0
    "dog", "god" => -1
*/

function shiftedDiff2(first, second) {
  return first.length == second.length ? (second + second).indexOf(first) : -1;
}

function shiftedDiff(first, second) {
  if (first == second) return 0;
  if (first.length !== second.length) return -1;
  const max = first.length;
  let shifts = 0;
  let firstArr = first;
  while (shifts < max) {
    firstArr = firstArr.split("");
    firstArr.unshift(firstArr.splice(-1, 1)[0]);
    shifts += 1;
    firstArr = firstArr.join("");
    if (firstArr == second) {
      break;
    }
  }
  if (shifts < max) return shifts;
  return -1;
}
