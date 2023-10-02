const DivideAndConquer = require('./divideAndConquer');

let spyCount = jest.spyOn(DivideAndConquer, 'recursiveCountItens');
let spyMaxValue = jest.spyOn(DivideAndConquer, 'maxValue');

afterEach(() => {
  spyCount.mockClear();
  spyMaxValue.mockClear();
});

describe('should test divide and Conquer class', () => {
  describe('should test recursive count', () => {
    it('should return 2 from recursive counting itens', () => {
      const result = DivideAndConquer.recursiveCountItens([1, 2], 0);

      expect(spyCount).toHaveBeenCalled();
      expect(spyCount).toHaveBeenCalledTimes(1);
      expect(result).toBe(2);
    });

    it('should return 3 from recursive counting itens', () => {
      const result = DivideAndConquer.recursiveCountItens([1, 2, 3], 0);

      expect(spyCount).toHaveBeenCalled();
      expect(spyCount).toHaveBeenCalledTimes(1);
      expect(result).toBe(3);
    });
  });
  describe('should test maxValue', () => {
    it('should return 4', () => {
      const result = DivideAndConquer.maxValue([3, 4]);

      expect(spyMaxValue).toHaveBeenCalled();
      expect(spyMaxValue).toHaveBeenCalledTimes(1);
      expect(result).toBe(4);
    });

    it('should return 7', () => {
      const result = DivideAndConquer.maxValue([1, 2, 3, 4, 7, 0]);

      expect(spyMaxValue).toHaveBeenCalled();
      expect(spyMaxValue).toHaveBeenCalledTimes(1);
      expect(result).toBe(7);
    });
  });
});
