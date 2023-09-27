const Fatorial = require('./fatorial.js');

let spyRecursive = jest.spyOn(Fatorial, 'recursive');
let spyIterative = jest.spyOn(Fatorial, 'iterative');

afterEach(() => {
  spyRecursive.mockClear();
  spyIterative.mockClear();
});

describe('should be test fatorial class', () => {
  describe('should be test recursive function', () => {
    it('should be return fatorial of 3', () => {
      const result = Fatorial.recursive(3);

      expect(spyRecursive).toHaveBeenCalled();
      expect(spyRecursive).toHaveBeenCalledTimes(1);
      expect(result).toBe(6);
    });

    it('should be return fatorial of 1', () => {
      const result = Fatorial.recursive(1);

      expect(spyRecursive).toHaveBeenCalled();
      expect(spyRecursive).toHaveBeenCalledTimes(1);
      expect(result).toBe(1);
    });

    it('should be return fatorial of 0', () => {
      const result = Fatorial.recursive(0);

      expect(spyRecursive).toHaveBeenCalled();
      expect(spyRecursive).toHaveBeenCalledTimes(1);
      expect(result).toBe(1);
    });
  });
  describe('should be test iterative function', () => {
    it('should be return fatorial of 1', () => {
      const result = Fatorial.iterative(1);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(1);
    });

    it('should be return fatorial of 3', () => {
      const result = Fatorial.iterative(3);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(6);
    });

    it('should be return fatorial of 0', () => {
      const result = Fatorial.iterative(0);

      expect(spyIterative).toHaveBeenCalled();
      expect(spyIterative).toHaveBeenCalledTimes(1);
      expect(result).toBe(1);
    });
  });
});
