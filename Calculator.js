export const Calculator = {
    _check_args : function(args) {
        if (args.length !== 2) {
            throw new Error(`${args.length} passed. Expected two arguments`);
        }
        if (typeof args[0] !== "number" || typeof args[1] !== "number") {
            throw new Error("Invalid argument types passed. Expected two numbers");
        }
    },
    add: function(...args) {
        this._check_args(args);
        const [x, y] = args;
        return x + y;
    },
    subtract: function(...args){
        this._check_args(args);
        const [x, y] = args;
        return x - y;
    },
    multiply: function(...args) {
        this._check_args(args);
        const [x, y] = args;
        return x * y;
    }
}