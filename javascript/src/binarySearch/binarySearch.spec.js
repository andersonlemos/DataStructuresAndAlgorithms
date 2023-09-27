const BinarySearch = require('./binarySearch');
const lista_valida = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let spyIterative = jest.spyOn(BinarySearch, 'iterative');
let spyRecursive = jest.spyOn(BinarySearch, 'recursive');

afterEach(() => {
  spyIterative.mockClear();
  spyRecursive.mockClear();
});

describe('should test a iterative binary search', () => {
  test('should return a valid value', () => {
    let position = BinarySearch.iterative(lista_valida, 6);

    expect(spyIterative).toHaveBeenCalled();
    expect(spyIterative).toHaveBeenCalledTimes(1);
    expect(position).not.toBe(undefined);
    expect(position).toBe(5);
  });

  test('should return an undefined value', () => {
    let position = BinarySearch.iterative(lista_valida, -1);

    expect(spyIterative).toHaveBeenCalled();
    expect(spyIterative).toHaveBeenCalledTimes(1);
    expect(position).toBe(undefined);
  });
});

describe('should test a recursive binary search', () => {
  test('should return an invalid value', () => {
    let position = BinarySearch.recursive(
      lista_valida,
      0,
      lista_valida.length - 1,
      -1,
    );

    expect(spyRecursive).toHaveBeenCalled();
    expect(spyRecursive).toHaveBeenCalledTimes(1);
    expect(position).toBe(undefined);
  });
});
