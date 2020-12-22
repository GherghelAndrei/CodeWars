// 1RM Calculator - 6 kyu kata

function calculate1RM(w, r) {
  if (r == 1) return w;
  if (r == 0 || w == 0) return 0;

  const epleyFormula = w * (1 + r / 30);
  const mcGlothinFormula = (100 * w) / (101.3 - 2.67123 * r);
  const lombardiFormula = r ** 0.1 * w;
  return Math.round(Math.max(epleyFormula, mcGlothinFormula, lombardiFormula));
}
