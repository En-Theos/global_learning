const size: number = 6;
let result: string = '';

for (let i: number = 1; i <= size; i++) {
    for (let j: number = 0; j < size - i; j++) {
        result += ' ';
    }
    for (let j: number = 0; j < (i * 2) - 1; j++) {
        result += '*';        
    }

    result += '\n';
}

console.log(result);