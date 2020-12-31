// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  return str
    .replace(/\d+/g, (v) => String.fromCharCode(v * 1))
    .split(" ")
    .map((v) =>
      v.length > 2
        ? v.slice(0, 1) + v.slice(-1) + v.slice(2, -1) + v.slice(1, 2)
        : v
    ).join` `;
}
