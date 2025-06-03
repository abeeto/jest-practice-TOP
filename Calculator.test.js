import {Calculator} from "./calculator.js";
describe('Calculator has add functionality', () => {
    test("should have method", () => {
        expect(Calculator.add).toBeInstanceOf(Function);
    })
    test("should add two numbers correctly", () => {
        expect(Calculator.add(1, 1)).toBe(2);
        expect(Calculator.add(2, 1)).toBe(3);
        expect(Calculator.add(1010, 215)).toBe(1225);
    })
    test("should throw an error if arguments passed are not 2", () => {
        expect(() => Calculator.add()).toThrow("0 passed. Expected two arguments");
        expect(() => Calculator.add(1)).toThrow("1 passed. Expected two arguments");
        expect(() => Calculator.add(1, 2, 3)).toThrow("3 passed. Expected two arguments");
    })
    test.each(
        [
            ["", 1],
            ["hi", 5],
            ["hel", "lo"],
            [12, "12"],
            [true, false],
            [1, []],
            [{}, 1],
        ]
    )('should not accept if arguments are not valid numbers',
        (a,b) => {
                expect(() => {
                    Calculator.add(a,b)
                }).toThrow("Both arguments provided must be numbers")
        }
    )
})

