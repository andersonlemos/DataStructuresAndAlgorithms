const Sum = require('./sum.js');

let spyIterative = jest.spyOn(Sum, 'iterative');
let spyRecursive = jest.spyOn(Sum, 'recursive');
let spySomatoryRecursion = jest.spyOn(Sum, 'somatoryRecursion');

afterEach(() => {
  spyIterative.mockClear();
  spyRecursive.mockClear();
  spySomatoryRecursion.mockClear();
});

describe('should test sum class', () => {
  describe('should test iterative function', () => {
    it('should return sum of 3 + 2', () => {
      const result = Sum.iterative([2, 3]);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(5);
    });

    it('should return sum of 4 + 2 + 6', () => {
      const result = Sum.iterative([4, 2, 6]);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(12);
    });

    it('should return sum of 4 + 2 + 6 + 122', () => {
      const result = Sum.iterative([4, 2, 6, 122]);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(134);
    });

    it('should return undefined if argument is not array', () => {
      const result = Sum.iterative(4, 2, 6, 122);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(undefined);
    });
  });

  describe('shoudl test recursive function', () => {
    it('should return sum of 3 + 2', () => {
      const result = Sum.recursive([3, 2], [3, 2].length);
      expect(spyRecursive).toHaveBeenCalled();
      expect(spyRecursive).toHaveBeenCalledTimes(1);
      expect(result).toBe(5);
    });

    it('should return sum of 3 + 2 + 6', () => {
      const result = Sum.recursive([3, 2, 6], [3, 2, 6].length);
      expect(spyRecursive).toHaveBeenCalled();
      expect(spyRecursive).toHaveBeenCalledTimes(1);
      expect(result).toBe(11);
    });
  });

  describe('shoudl test somatory s function', () => {
    it('should return sum of 3 + 2', () => {
      const result = Sum.somatoryRecursion([3, 2]);

      expect(spySomatoryRecursion).toHaveBeenCalled();
      expect(spySomatoryRecursion).toHaveBeenCalledTimes(1);
      expect(result).toBe(5);
    });

    it('should return sum of 3 + 2 + 6', () => {
      const result = Sum.somatoryRecursion([3, 2, 6]);

      expect(spySomatoryRecursion).toHaveBeenCalled();
      expect(spySomatoryRecursion).toHaveBeenCalledTimes(1);
      expect(result).toBe(11);
    });
  });
});
