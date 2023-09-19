const file = require("./binarySearch")

const lista_valida = [1,2,3,4,5,6,7,8,9]

let spyIterative = jest.spyOn(file, "binarySearch")
let spyRecursive = jest.spyOn(file, "binarySearchRecursive")

describe("should test a iterative binary search", () => {
    test("should return a valid value", () => {
        let position = file.binarySearch(lista_valida,6)
        
        expect(spyIterative).toHaveBeenCalled()
        expect(spyIterative).toHaveBeenCalledTimes(1);
        expect(position).not.toBe(undefined)
        expect(position).toBe(5)
        spyIterative.mockClear()
    })
    
    test("should return an undefined value", () => {
         let position = file.binarySearch(lista_valida,-1)
        
        expect(spyIterative).toHaveBeenCalled()
        expect(spyIterative).toHaveBeenCalledTimes(1);
        expect(position).toBe(undefined)
        spyIterative.mockClear()
    })
})

describe("should test a recursive binary search",() => {
    test("should return an invalid value", () => {
        let position = file.binarySearchRecursive(lista_valida,0 ,lista_valida.length -1, -1)
        
        expect(spyRecursive).toHaveBeenCalled()
        expect(spyRecursive).toHaveBeenCalledTimes(1);
        expect(position).toBe(undefined)
        spyRecursive.mockClear()
    })

    test("should return a valid value", () => {
        let position = file.binarySearchRecursive(lista_valida, 0, lista_valida.length -1, 6)

        expect(spyRecursive).toHaveBeenCalled()
        expect(spyRecursive).toHaveBeenCalledTimes(1)
        expect(position).not.toBe(undefined)
        expect(position).toBe(5)
        spyRecursive.mockClear()
    })
})
