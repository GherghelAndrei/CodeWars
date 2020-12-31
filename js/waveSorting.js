function waveSort(arr) {
  arr = arr.sort(function (a, b) {
    return b - a;
  });

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i - 1] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    if (i + 1 < arr.length && arr[i + 1] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return;
}
