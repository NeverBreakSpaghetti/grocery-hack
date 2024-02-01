import {Request, Response} from "express";

export const add = (request: Request, response: Response) => {

    response.status(201).send()
}