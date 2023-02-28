function getTimeFromMinutes(minutes:number): string {
    if (minutes < 0) return "Помилка даних";

    let hours: number = Math.trunc(minutes / 60);
    let remainderMinutes: number = minutes % 60;

    let formWord!: string;

    if (hours === 0 || hours === 5 || hours === 6 || hours === 7 || hours === 8 || hours === 9) {
        formWord = 'годин';
    } else if (hours === 1) {
        formWord = 'година';
    } else if (hours === 2 || hours === 3 || hours === 4) {
        formWord = 'години';
    } 

    return `Це ${hours} ${formWord} і ${remainderMinutes} хвилин`;
}

function findMaxNumber(num1: number, num2: number, num3: number, num4: number, ...numArr: number[]): number {
    let max: number = num1;

    numArr.push(num2);
    numArr.push(num3);
    numArr.push(num4);

    for (const number of numArr) {
        if (max < number) {
            max = number;
        }
    }

    return max;
}