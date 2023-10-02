const QuickSort = require('./quickSort');

let spySort = jest.spyOn(QuickSort, 'orderArray');

afterEach(() => {
  spySort.mockClear();
});

describe('shoudl test quicksort algorithm', () => {
  it('should return ordered array with 2 elements', () => {
    const unorderArray = [2, 1];
    const orderedArray = unorderArray.sort();

    const result = QuickSort.orderArray(unorderArray);

    expect(spySort).toHaveBeenCalled();
    expect(spySort).toHaveBeenCalledTimes(1);
    expect(result).toMatchObject(orderedArray);
  });

  it('should return ordered array with to 10 elements', () => {
    const unorderArray = [2, 1, 5, 6, 4, 7, 9, 8, 3];
    const orderedArray = unorderArray.sort();

    const result = QuickSort.orderArray(unorderArray);

    expect(spySort).toHaveBeenCalled();
    expect(spySort).toHaveBeenCalledTimes(1);
    expect(result).toMatchObject(orderedArray);
  });
});
