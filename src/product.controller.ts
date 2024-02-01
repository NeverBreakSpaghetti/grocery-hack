import {Request, Response} from "express";
import ProductService from "./product.service";
import {isValid, productDto} from "./product.dto";


export const add = (request: Request, response: Response) => {
    if (!isValid(request.body))
        return response.status(400).json({message: "product not valid"}).send()

    new ProductService().add(request.body)
    response.status(201).send()
}