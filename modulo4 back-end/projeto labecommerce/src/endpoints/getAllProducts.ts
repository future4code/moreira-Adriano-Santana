import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types";


export default async function getAllProducts(req: Request, res: Response): Promise<void> {

    try {
        const name = req.query
        //const result: user[] = await connection.raw("SELECT * FROM labecommerce_users")
        //res.send(result[0])
        const products: products[] = await connection('labecommerce_products')
        res.send(products)

    } catch (error) {
        res.status(500).send("Unexpected server error")
    } 
}