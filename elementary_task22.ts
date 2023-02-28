const compose = (...functions: Function[]): Function => {
    return function (num: number): number {
        return functions.reduceRight((acc, fun) => {
            return fun(acc);
        }, num);
    };
};

const composeWithArgs = (...functions: Function[]): Function => {
    return function (...num: number[]): number {
        return functions.reduceRight((acc, fun) => {
            return [...fun(...acc)];
        }, num)[0];
    };
};