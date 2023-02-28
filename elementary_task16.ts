function factorial(num: number): number | string {
    let result: number = num;

    if (!Number.isInteger(num)) return "Число має бути цілим";
    if (num <= 0) return 1;
    
    if (num !== 1) {
        let t: number | string  =  factorial(--num);
        if (typeof t === 'number') {
            result *= t
        }
    }

    return result;
}