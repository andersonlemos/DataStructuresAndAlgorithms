const Fatorial = require("./fatorial.js");

let spyRecursive = jest.spyOn(Fatorial,"recursive")

afterEach(() => {
    spyRecursive.mockClear() 
})

describe("should be test fatorial class",() => {

    it("should be return fatorial of 3", () => {
        
        const result = Fatorial.recursive(3)

        expect(spyRecursive).toHaveBeenCalled()
        expect(spyRecursive).toHaveBeenCalledTimes(1);
        expect(result).toBe(6);
    })

    it("should be return fatorial 1", () => {
        
        const result = Fatorial.recursive(1)

        expect(spyRecursive).toHaveBeenCalled()
        expect(spyRecursive).toHaveBeenCalledTimes(1);
        expect(result).toBe(1);
    })

    it("should be return fatorial 0", () => {
        
        const result = Fatorial.recursive(0)

        expect(spyRecursive).toHaveBeenCalled()
        expect(spyRecursive).toHaveBeenCalledTimes(1);
        expect(result).toBe(1);
    })
})