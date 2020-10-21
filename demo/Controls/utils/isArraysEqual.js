export default function isArrayEqual(arrayA, arrayB) {
  return (
    arrayA.length === arrayB.length &&
    arrayA.every((value, key) => value === arrayB[key])
  );
}
