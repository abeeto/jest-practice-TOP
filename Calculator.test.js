import {Calculator} from "./calculator.js";
describe('Calculator has add functionality', () => {
    test("should have method", () => {
        expect(Calculator.add).toBeInstanceOf(Function);
    })
    test("should add two numbers correctly", () => {
        expect(Calculator.add(1, 1)).toBe(2);
        expect(Calculator.add(2, 1)).toBe(3);
        expect(Calculator.add(-123, -5)).toBe(-128);
        expect(Calculator.add(1010, 215)).toBe(1225);
        expect(Calculator.add(0.313131, 0.5)).toBeCloseTo(0.813131);
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
    )('error if arguments are not valid numbers',
        (a,b) => {
                expect(() => {
                    Calculator.add(a,b)
                }).toThrow("Invalid argument types passed. Expected two numbers")
        }
    )
})

describe('Calculator should have subtract functionality', () => {
    test("should have a subtract method", () => {
        expect(Calculator.subtract).toBeInstanceOf(Function);
    })
    test("should throw an error if number of arguments passed is not 2", () => {
        expect(() => Calculator.subtract()).toThrow("0 passed. Expected two arguments")
        expect(() => Calculator.subtract(1)).toThrow("1 passed. Expected two arguments")
        expect(() => Calculator.subtract(1, 5, 3, 1)).toThrow("4 passed. Expected two arguments")
        expect(() => Calculator.subtract(1, 5, 6, 1, 1, 5, 6, 1)).toThrow("8 passed. Expected two arguments")
    })
    test.each(
            [
                [1, null],
                [null, undefined],
                [0, false],
                [1, true],
                ["hello", "world"],
                ["taken", -3],
                [2.15, "11"],
            ]
    )("error if arguments are not valid numbers",
        ((a, b) =>
            expect(() => Calculator.subtract(a, b)).toThrow("Invalid argument types passed. Expected two numbers"))
    )
    test("when two integers are positive", () => {
        expect(Calculator.subtract(10, 4)).toBe(40);
        expect(Calculator.subtract(20, 301)).toBe(6020);
    })
    test("when two integers are negative", () => {
        expect(Calculator.subtract(-3, -6)).toBe(18);
        expect(Calculator.subtract(-141, -6)).toBe(-135);
    })
    test("when at least one argument is floating number", () => {
        expect(Calculator.subtract(-3.3, -6)).toBeCloseTo(2.7);
        expect(Calculator.subtract(-1.525, 3)).toBeCloseTo(-4.525);
    })
})
describe('Calculator should have multiply functionality', () => {
    test("should have a multiply method", () => {
        expect(Calculator.multiply).toBeInstanceOf(Function);
    })
    test("throw an error unless two arguments are passed", () => {
        expect(() => Calculator.multiply()).toThrow("0 passed. Expected two arguments");
        expect(() => Calculator.multiply(1)).toThrow("1 passed. Expected two arguments");
        expect(() => Calculator.multiply(2,131,3)).toThrow("3 passed. Expected two arguments");
    })
    test.each(
        [
            [1,""],
            ["", ""],
            ["hi", 3],
            [12, undefined],
            [undefined, undefined],
            [-1, undefined],
            [2, false],
            [false, undefined],
            [false, true]
        ]
        )("when two arguments are not valid numbers",
        (a, b) => expect(() => Calculator.multiply(a, b))
            .toThrow("Invalid argument types passed. Expected two numbers")
    )
    test("when two integers are positive", () => {
        expect(Calculator.multiply(10, 4)).toBe(40);
        expect(Calculator.multiply(200, 123)).toBe(24600);
    })
    test("when two integers are negative", () => {
        expect(Calculator.multiply(-3, -6)).toBe(18);
        expect(Calculator.multiply(-141, -6)).toBe(846);
    })
    test("when at least one argument is floating number", () => {
        expect(Calculator.multiply(-3.3, -6)).toBeCloseTo(19.8);
        expect(Calculator.multiply(-1.525, 3)).toBeCloseTo(-4.575);
        expect(Calculator.multiply(2.785, 13)).toBeCloseTo(36.205);
    })
})