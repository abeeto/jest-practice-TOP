export default function analyseArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("Expected an array to be passed as the argument")
    }
    if (array.length === 0) {
        throw new Error("Please provide a non-empty array");
    }
    for (const item of array) {
        if (typeof item !== "number") {
            throw new Error("Expected an array of only numbers!")
        }
    }
    let minimum = Infinity;
    array.forEach(number => { if (number < minimum) minimum = number});

    let maximum = -Infinity;
    array.forEach(number => { if (number > maximum) maximum = number});

    const average = array.reduce((acc, cur) => acc + cur) / array.length;
    return {average, min: minimum, max: maximum, length: array.length};
}