function sayHello(name: string): string {
    return `Привіт, ${name}!`;
}

function returnNeighboringNumbers(num: number): number[] {
    return [num--, num, num++];
}

function getMathResult(num1: number, num2: number): string | number {
    if (num2 <= 0) return num1;

    let result: string = '' + num1;
    let sum: number = num1;
    for (let i: number = 0; i < num2 - 1; i++) {
        sum += num1;
        result += `---${sum}`;
    }

    return result;
}

console.log(getMathResult(5, 3));