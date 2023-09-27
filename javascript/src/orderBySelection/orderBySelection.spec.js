const OrderBySelection = require('./orderBySelection');

const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let spySearch = jest.spyOn(OrderBySelection, 'searchMinor');
let spyGetByOrder = jest.spyOn(OrderBySelection, 'getByOrder');

afterEach(() => {
  spySearch.mockClear();
  spyGetByOrder.mockClear();
});

describe('should be test order by selction functions', () => {
  it('should be return a minor number', () => {
    const result = OrderBySelection.searchMinor(numbers);

    expect(spySearch).toHaveBeenCalled();
    expect(spySearch).toHaveBeenCalledTimes(1);
    expect(result.minorNumber).toBe(1);
    expect(result.minorIndex).toBe(9);
  });

  it('should be return an ordered array', () => {
    const result = OrderBySelection.getByOrder(numbers);

    expect(spyGetByOrder).toHaveBeenCalled();
    expect(spyGetByOrder).toHaveBeenCalledTimes(1);
    expect(result).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
