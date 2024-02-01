import {Request, Response} from "express";
import ProductService from "./product.service";


export const add = (request: Request, response: Response) => {

    new ProductService().add(request.body)
    response.status(201).send()
}