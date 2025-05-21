export default function reverseString(s) {
  if (typeof s !== "string") {
    if (typeof s === "number") {
      throw TypeError(
        "reverseString function only accepts strings, not numbers"
      );
    }
    throw TypeError("Can not reverse a non-string value");
  }
  let toRet = "";
  for (let i = s.length - 1; i > -1; i--) {
    toRet += s[i];
  }
  return toRet;
}
