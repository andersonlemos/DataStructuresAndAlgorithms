function searchMinor(arr) {
  const nestedArray = arr.slice();
  const nestedLength = nestedArray.length;

  let minorNumber = nestedArray[0];
  let minorIndex = 0;

  for (let i = 0; i < nestedLength; i++) {
    if (nestedArray[i] < minorNumber) {
      minorNumber = nestedArray[i];
      minorIndex = i;
    }
  }

  return { minorNumber, minorIndex };
}

function getByOrder(arr) {
  let orderedArray = [];
  let nestedArray = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    let item = searchMinor(nestedArray);
    nestedArray = nestedArray.slice(0, item.minorIndex);
    orderedArray.push(item.minorNumber);
  }

  return orderedArray;
}

module.exports = { searchMinor, getByOrder };
