const pactum = require("pactum");
const userData = require('../src/data/fakers/user-data-factory');

describe("API Test Suite", () => {

    const baseurl = 'https://serverest.dev'
    let idUsuario = '04k2Mv3exD35BpgE'

    it.skip("GET Request Test", async () => {
        const response = await pactum.spec()
            .get(baseurl + '/usuarios')

        // console.log(response.body);
    });

    it("GET user by ID", async () => {
        const response = await pactum.spec()
            .get(baseurl + '/usuarios/' + idUsuario)

        console.log(response.body);
    });

    it("POST Request Test", async () => {
        const newUser = userData.generateValidUser()
        console.log(newUser);
        const response = await pactum.spec()
            .post(baseurl + '/usuarios')
            .withJson(newUser)

        console.log(response.body);
        idUsuario = response.body._id
    });

    it("GET user by create user ID", async () => {
        const response = await pactum.spec()
            .get(baseurl + '/usuarios/' + idUsuario)

        console.log(response.body);
    });
});