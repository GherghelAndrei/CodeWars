function maxBall(v0) {
  let maxHeight = -1;
  let time = 1;
  while (true) {
    const height =
      ((v0 * 1000) / 3600) * (time / 10) - (time / 10) ** 2 * 4.905;
    if (height > maxHeight) {
      maxHeight = height;
      time += 1;
    } else {
      return time - 1;
    }
  }
}
