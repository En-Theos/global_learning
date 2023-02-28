interface IShoppingMallData {
    shops: {
        width: number, 
        length: number
    }[],
    height: number,
    moneyPer1m3: number,
    budget: number
}

const shoppingMallData: IShoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data: IShoppingMallData): string {
    let totalArea: number = 0;

    data.shops.forEach(item => {
        totalArea += item.length * item.width;
    });

    totalArea *= data.height;

    if (data.budget >= data.moneyPer1m3 * totalArea) {
        return "Бюджету вистачає";
    } else {
        return "Бюджету не вистачає";
    }
}