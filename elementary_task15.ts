type menu = {name: string, price: string};

interface IRestorantData {
    menu: menu[],
    waitors: {name: string, age: number}[],
    averageLunchPrice: string;
    openNow: boolean
}

const restorantData: IRestorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop: boolean): string {
    return prop ? 'Открыто' : 'Закрыто';
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish: menu, sDish: menu, average: string) {
    if ((parseInt(fDish.price) + parseInt(sDish.price)) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data:IRestorantData) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);