function recursiveCountItens(arr, count) {
  if (arr[count] !== undefined && arr[count] !== null) {
    return recursiveCountItens(arr, count + 1);
  }
  return count;
}

function maxValue(arr) {
  let maxValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
module.exports = { recursiveCountItens, maxValue };
