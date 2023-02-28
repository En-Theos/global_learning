function amountOfPages(summary: number): number {
    let countPages: number = 1;
    let str: string = '';
    
    while (str.length < summary ) {
        str += countPages;
        countPages++
    }
    
    return countPages - 1;
}

console.log(amountOfPages(25));