import {Request, Response} from "express";
import ProductService from "./product.service";
import {isValid, mapToProductDto} from "./product.dto";

export const add = (request: Request, response: Response) => {
    if (!isValid(request.body))
        return response.status(400).json({message: "product not valid"}).send()

    const productDto = mapToProductDto(request.body)

    new ProductService().add(productDto)
    response.status(201).send()
}