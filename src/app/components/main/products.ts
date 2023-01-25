import { faker } from "@faker-js/faker"

export interface IProduct {
    id: number
    name: string
    price: number
    quantity: number
}

const productGenerator = (numberOfProducts: number) => {
    const result: IProduct[] = []
    Array.from({ length: numberOfProducts }).forEach((elem: any, index:number) => {
        result.push({
            id: index + 1,
            name: `${index + 1}-${faker.commerce.product()}`,
            price: randomFromInterval(10,100),
            quantity: 0
        })
    });
    return result
}

const randomFromInterval = (min: number, max: number) => {
    return Number((Math.random() * (max - min + 1) + min).toFixed(2))
  }

const availableProducts: IProduct[] = productGenerator(100)

export default availableProducts