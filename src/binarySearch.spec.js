const { afterEach, beforeEach } = require("node:test")
const file = require("./binarySearch")

let spy = jest.spyOn(file, "binarySearch")

test("should return a valid value", () => {
    let lista_valida = [1,2,3,4,5,6,7,8,9]
    let result = file.binarySearch(lista_valida,6)
    
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).not.toBe(undefined)
    expect(result).toBe(5)
    spy.mockClear()
})

test("should return an undefined value", () => {
    let lista_valida = [1,2,3,4,5,6,7,8,9]
    let result = file.binarySearch(lista_valida,-1)
    
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toBe(undefined)
    spy.mockClear()
})