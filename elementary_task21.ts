const funds: {amount: number}[] = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data: {amount: number}[]): number => {
    return data.reduce((acc, item) => {
        return acc + (item.amount > 0 ? item.amount : 0);
    }, 0);
};

const getTotalIncomeAmount = (data: {amount: number}[]): number => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, item) => {
        return acc + item.amount;
    }, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));