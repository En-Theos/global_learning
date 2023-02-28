function deepCount(arr: any[]): number {
    let count = 0;

    arr.forEach(item => {
        if (Array.isArray(item)) {
            count++;
            count = deepCount(item);
        } else {
            count++;
        }
    });

    return count
}

deepCount([3, "d", ["s0", [2]], []]);