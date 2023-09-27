function iterative(array, item) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let num = array[mid];

    if (num == item) {
      return mid;
    } else if (num > item) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return undefined;
}

function recursive(array, left, right, item) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (array[mid] == item) {
      return mid;
    } else if (array[mid] > item) {
      return recursive(array, left, mid - 1, item);
    }
    return recursive(array, mid + 1, right, item);
  }

  return undefined;
}

module.exports = { iterative, recursive };
