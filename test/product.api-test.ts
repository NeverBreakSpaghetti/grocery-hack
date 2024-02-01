import request from 'supertest'

const app = 'http://localhost:3001'
describe.skip('product api test', () => {

    describe('given a product', () => {
        const product = { name: "pasta", price: "0.80"}

        describe('when add the product', () => {

            it('should have success and return the product created with id and location', async () => {
                const response = await request(app).post("/products").send(product);
                expect(response.statusCode).toBe(201)
                expect(response.header).toHaveProperty('location')
                expect(response).toHaveProperty('id', expect.any(String))
                expect(response).toHaveProperty('name', 'pasta')
                expect(response).toHaveProperty('price', '0.80')
            })
        })
    })
})