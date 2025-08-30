const { faker } = require('@faker-js/faker');

class UserDataFacory {

    static generateValidUser(isAdmin = 'false') {
        return {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: isAdmin
        }
    }
}

module.exports = UserDataFacory
