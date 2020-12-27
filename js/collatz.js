function* collatz() {
  let sequence = generateSequence(),
    count = 0;
  while (true) {
    yield sequence[count];
    count++;
  }
}

function generateSequence(maxLevels = 50) {
  let levels = [[1]];
  while (levels.length < maxLevels) {
    let level = [];
    levels[levels.length - 1].forEach(function (num) {
      // See reverse collatz relation
      const mod6 = (num - 4) % 6;
      const odd = (num - 1) / 3;
      if (!mod6 && odd != 1) {
        level.push(odd);
      }
      level.push(num * 2);
    });
    levels.push(level.sort((a, b) => a - b));
  }
  return levels.flat();
}
