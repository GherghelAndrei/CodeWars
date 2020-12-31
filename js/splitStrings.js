function solution(str) {
  let final = [];
  for (let i = 0; i < str.split("").length; i += 2) {
    final.push(str.slice(i, i + 2));
  }
  final = final.map((item) => (item.length == 1 ? item + "_" : item));
  return final;
}
solution("abcdef");
// expect ["ab", "cd", "ef"]
