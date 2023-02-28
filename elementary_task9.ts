function fib(num: number): string {
    let arrFib: number[] = [0, 1];

    for (let i:number = 2; i < num; i++) {
        arrFib[i] = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
    }

    return arrFib.join(" ");
}

console.log(fib(5));