export default function capitalize(s) {
  if (typeof s !== "string") {
    throw TypeError("Not a string value");
  }
  let sOperate = s.trimStart();
  return sOperate.slice(0, 1).toUpperCase() + sOperate.slice(1);
}
