const pactum = require("pactum");
const productsData = require('../src/data/fakers/products-data-factory');
const userData = require('../src/data/fakers/user-data-factory');

describe("Products API Test Suite", () => {

    const baseurl = 'https://serverest.dev'
    let idProduct = '';
    let authorization = '';
    let userEmail = '';
    let userPassword = '';
    let newProduct = {}

    it("POST Request Test", async () => {
        const newUser = userData.generateValidUser('true')
        userEmail = newUser.email
        userPassword = newUser.password

        const response = await pactum.spec()
            .post(baseurl + '/usuarios')
            .withJson(newUser)

    });

    it("Login with created user", async () => {
        const response = await pactum.spec()
            .post(baseurl + '/login')
            .withJson({
                email: userEmail,
                password: userPassword
            })
        authorization = response.body.authorization
    });

    it("POST Request Test", async () => {
        newProduct = productsData.generateValidProduct()
        console.log(newProduct);
        const response = await pactum
            .spec()
            .post(baseurl + '/produtos')
            .withHeaders('Authorization', authorization)
            .withJson(newProduct)

        idProduct = response.body._id
    });

    it("UPDATE product by ID", async () => {

        const payload = productsData.updateValidProduct(newProduct)
        console.log(payload);

        const response = await pactum
            .spec()
            .put(baseurl + '/produtos/' + idProduct)
            .withHeaders('Authorization', authorization)
            .withJson(payload)

        console.log(response.body);
    });

    it('DELETE product', async () => {
        const response = await pactum
            .spec()
            .delete(baseurl + '/produtos/' + idProduct)
            .withHeaders('Authorization', authorization)
        console.log(response.body);
    });
});