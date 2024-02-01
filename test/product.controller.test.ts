import {MockRequest, MockResponse} from "node-mocks-http";
import {Request, Response} from "express";
import httpMocks from "node-mocks-http";
import * as ProductController from "../src/product.controller";

describe('product controller', () => {
    let request: MockRequest<Request>
    let response: MockResponse<Response>

    beforeEach(() => {
        request = httpMocks.createRequest()
        response = httpMocks.createResponse()
    })

    describe('POST /products', () => {
        beforeEach(() => {
            request.method = 'POST'
            request.url = '/products'
        })

        it('should return a response with status 201 when new product is add to catalogue', async () => {
            request.body = {name: 'pasta', price: '0.80'}

            ProductController.add(request, response)

            expect(response.statusCode).toBe(201)
        });
    });
});