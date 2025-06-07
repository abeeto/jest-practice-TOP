import analyseArray from "./analyseArray.js"
describe("analyseArray", () => {
    test("should be a funciton", () => {
        expect(analyseArray).toBeInstanceOf(Function);
    })
    test("should only take an array of numbers", () => {
        expect(() => analyseArray()).toThrow("Expected an array to be passed as the argument");
        expect(() => analyseArray([])).toThrow("Please provide a non-empty array");
        expect(() => analyseArray(["hi", "this should throw", 19])).toThrow("Expected an array of only numbers!")
    })
})

describe("analyseArray must", () => {
    test("return object", () => {
        expect(analyseArray([12, 14])).toBeInstanceOf(Object);
    })
    test(" with average value of numbers", () => {
        expect(analyseArray([12, 14]).average).toEqual(13);
        expect(analyseArray([-56, 14]).average).toEqual(-21);
        expect(analyseArray([1.33, 3.55, 3.5, 5.6, -2.12]).average).toEqual(2.372);
        expect(analyseArray([0.5, 0.5, 0.3]).average).toBeCloseTo(0.43333);
    })
    test(" with min value of numbers", () => {
        expect(analyseArray([12, 14])["min"]).toEqual(12);
        expect(analyseArray([-56, 14])["min"]).toEqual(-56);
        expect(analyseArray([1.33, 3.55, 3.5, 5.6, -2.12])["min"]).toEqual(-2.12);
        expect(analyseArray([0.5, 0.5, 0.3])["min"]).toEqual(0.3);
    })
    test(" with max value of numbers", () => {
        expect(analyseArray([12, 14])["max"]).toEqual(14);
        expect(analyseArray([-56, 14, 85, 43])["max"]).toEqual(85);
        expect(analyseArray([1.33, 3.55, 3.5, 5.6, -2.12])["max"]).toEqual(5.6);
        expect(analyseArray([0.5, 0.82, 0.3])["max"]).toEqual(0.82);
    })
    test(" with length value of numbers", () => {
        expect(analyseArray([12, 14])["length"]).toEqual(2);
        expect(analyseArray([-56, 14, 85, 43])["length"]).toEqual(4);
        expect(analyseArray([1.33, 3.55, 3.5, 5.6, -2.12])["length"]).toEqual(5);
        expect(analyseArray([0.5, 0.82, 0.3])["length"]).toEqual(3);
        expect(analyseArray(Array(101).fill(0, 0, 101))["length"]).toEqual(101);
    })
})