const storeName: string = "Shop";

interface IStoreDescription {
    burger: number,
    employees: string[],
    product: Record<string, number>,
    open: boolean
}

const storeDescription: IStoreDescription =  {
    burger: 10000,
    employees: ["Alex", "Oleg"],
    product: {
        milk: 123, 
        aple: 321
    }, 
    open: true
}