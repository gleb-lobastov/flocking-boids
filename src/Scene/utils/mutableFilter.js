export default function mutableFilter(array, iteratee) {
  let i = 0,
    j = 0;

  while (i < array.length) {
    const val = array[i];
    if (iteratee(val, i, array)) array[j++] = val;
    i++;
  }

  array.length = j;
  return array;
}
