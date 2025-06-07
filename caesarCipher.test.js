import caesarCipher from './caesarCipher';

describe('caesarCipher must fundamentally', () => {
    test("be a function", () => {
        expect(caesarCipher).toBeInstanceOf(Function);
    })
    test("only accept an object", () => {
        expect(() => caesarCipher()).toThrow("Expected object as argument");
        expect(() => caesarCipher(1, 4, 5)).toThrow("Expected object as argument");
        expect(() => caesarCipher(null)).toThrow("Expected object as argument");
    })
    test.each(
        [
            [{message: undefined, shift: undefined}],
            [{message: 123, shift: "hello"}],
            [{message: "", uyadad: 123, another: 213}],
            [{message: "hello", shift: null}],
            [{message: "this is fake", shift: false}],
            [{message: "this is fake", shift: true}],
        ],
    )("should reject object with invalid attribute types", (obj) => {
        expect(() => caesarCipher(obj)).toThrow("Invalid object. Expected object with string for message and int for shift attributes");
    })
    test("accept object with message and shift properties", () => {
        expect(() => caesarCipher({})).toThrow("Received an object with 0 attributes. Expected object with message and shift attributes");
        expect(() => caesarCipher({message: "", shift: 12})).not.toThrow();
    })

    test("shift character in message using shift as offset", () => {
        expect(caesarCipher({message: "hello", shift: 3})).toMatch("khoor");
        expect(caesarCipher({message: "augustus", shift: 3})).toMatch("dxjxvwxv");
        expect(caesarCipher({message: "xyz", shift: 3})).toMatch("abc");
        expect(caesarCipher({message: "hEllO", shift: 3})).toMatch("kHooR");
        expect(caesarCipher({message: "hEllO augustus", shift: 3})).toMatch("kHooR dxjxvwxv");
        expect(caesarCipher({message: "hEllO Caeser sent this!", shift: 3})).toMatch("kHooR Fdhvhu vhqw wklv!");

    })
})