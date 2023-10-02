function orderArray(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let minors = [];
  let majors = [];
  let _arr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) minors.push(arr[i]);
    if (arr[i] > pivot) majors.push(arr[i]);
  }

  return _arr
    .concat(orderArray(minors))
    .concat(pivot)
    .concat(orderArray(majors));
}

module.exports = { orderArray };
