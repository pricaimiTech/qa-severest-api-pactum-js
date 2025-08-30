const { faker } = require('@faker-js/faker');

class ProductsDataFactory {

    static generateValidProduct() {
        return {
            nome: faker.commerce.productName(),
            preco: parseInt(faker.commerce.price({ min: 10, max: 1000, dec: 9 })),
            descricao: faker.commerce.productDescription(),
            quantidade: parseInt(faker.number.int({ min: 1, max: 1000 }))
        }
    }

    static updateValidProduct(originalData) {
        return {
            ...originalData,
            preco: parseInt(faker.commerce.price({ min: 10, max: 1000, dec: 9 })),
            quantidade: parseInt(faker.number.int({ min: 1, max: 1000 }))
        }
    }
}

module.exports = ProductsDataFactory