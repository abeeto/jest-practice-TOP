import capitalize from "./capitalize.js";

describe("capitalize function", () => {
  test("capitalize function exists", () => {
    expect(capitalize).not.toBeUndefined();
  });

  test("capitalize fn throw error for not string", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
    expect(() => capitalize()).toThrow(TypeError);
    expect(() => capitalize(undefined)).toThrow(TypeError);
    expect(() => capitalize(true)).toThrow(TypeError);
  });
  test("capitalize fn accepts string and returns string", () => {
    const result = capitalize("anyString");
    expect(typeof result).toBe("string");
  });

  test("capitalize fn return string with first char capitalized", () => {
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
    expect(capitalize("zxzq")).toBe("Zxzq");
    expect(capitalize("i woke up the other day")).toBe(
      "I woke up the other day"
    );
    expect(capitalize(".i work all night")).toBe(".i work all night");
    expect(capitalize("    i work all night")).toBe("I work all night");
    expect(capitalize("    i work and it's great   ")).toBe(
      "I work and it's great   "
    );
  });
});
