// The Speed of Letters - 7kyu

function speedify(input) {
  let final = [];
  input.split("").forEach((letter, index) => {
    const asciiCode = index + (letter.charCodeAt(0) - 65);
    final[asciiCode] = letter;
  });
  for (let i = 0; i < final.length; i++) {
    if (!final[i]) {
      final[i] = " ";
    }
  }
  return final.join("");
}
