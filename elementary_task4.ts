const oldArr: number[] = [3, 5, 8, 16, 20, 23, 50];
const newArr: number[] = [];

for (let i: number = 0; i < oldArr.length; i++) {
    newArr[i] = oldArr[i];
}

const data: (number | string)[] = [5, 10, 'Shopping', 20, 'Homework'];

for (let i: number = 0; i < data.length; i++) {
    let item: number | string = data[i];
    if (typeof item === "number") {
        data[i] = item * 2;
    }
    if (typeof item === "string") {
        data[i] = item + " - done";
    }
}

for (const item of data) {
    console.log(item);
}

let reverseData: (number | string)[] = [];

for (let i: number = data.length; i >= 0; i--) {
    reverseData[data.length - i - 1] = data[i];
}

for (const item of reverseData) {
    console.log(item);
}