export default function renderFloat(number) {
  const absValue = Math.abs(number);
  if (absValue >= 0.1) {
    return number.toFixed(2);
  }
  if (absValue >= 0.001) {
    return number.toFixed(4);
  }
  return number.toFixed(6);
}
