function iterative(arr) {
  if (!Array.isArray(arr)) return undefined;

  const _length = arr.length;
  let _counter = 0;
  let _sum = 0;

  while (_length > _counter) {
    _sum += arr[_counter];
    _counter++;
  }
  return _sum;
}

function recursive(arr, length) {
  if (length == 0) return 0;
  return arr[length - 1] + recursive(arr, length - 1);
}

function somatoryRecursion(arr) {
  if (arr.length == 0) return 0;

  const nestedArray = arr.slice(0, arr.length - 1);

  return arr[arr.length - 1] + somatoryRecursion(nestedArray);
}

module.exports = { iterative, recursive, somatoryRecursion };
