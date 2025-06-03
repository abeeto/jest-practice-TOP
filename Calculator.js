export const Calculator = {
    add: (...args) => {
        if (args.length !== 2) {
            throw new Error(`${args.length} passed. Expected two arguments`);
        }
        const [x, y] = args;
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Both arguments provided must be numbers");
        }
        return x + y;
    },
    divide: () => {

    }
}