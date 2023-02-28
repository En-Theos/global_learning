function reverse(str: string): string {
    return str.split('').reverse().join('');
}

function availableCurr(arrCurrencies: string[], missingCurr?: string): string {
    let strResult = 'Доступні валюти:\n';

    arrCurrencies.forEach((item) => {
        if (item !== missingCurr) {
            strResult += item + '\n';
        }
    });

    return strResult;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY', 'USD', 'EUR'], 'CNY'));