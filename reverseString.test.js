import { expect } from "playwright/test";
import reverseString from "./reverseString";
describe("reverse string function", () => {
  test("reverseString function exists", () => {
    expect(reverseString).not.toBeUndefined();
  });

  test("reverseString function should throw error if no string arg passed", () => {
    expect(() => reverseString()).toThrow(TypeError);
    try {
      reverseString(1231).expect.toThrow(TypeError);
    } catch (e) {
      expect(e.message).toBe(
        "reverseString function only accepts strings, not numbers"
      );
    }
  });

  test("reverseString function should return string", () => {
    expect(reverseString("")).toBe("");
  });

  test("reverseString function should return string that is in reserve", () => {
    expect(reverseString("")).toBe("");
    expect(reverseString("b")).toBe("b");
    expect(reverseString("cat")).toBe("tac");
    expect(reverseString(" cat")).toBe("tac ");
    expect(reverseString("I am a cat")).toBe("tac a ma I");
  });
});
