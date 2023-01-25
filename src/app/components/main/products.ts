import { faker } from "@faker-js/faker"

export interface IProduct {
    id: number
    name: string
    price: number
}

const productGenerator = (numberOfProducts: number) => {
    const result: IProduct[] = []
    Array.from({ length: numberOfProducts }).forEach((elem: any, index:number) => {
        result.push({
            id: index + 1,
            name: `${index + 1}-${faker.commerce.product()}`,
            price: 11.55
        })
    });
    return result
}

const availableProducts: IProduct[] = productGenerator(100)

export default availableProducts