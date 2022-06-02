import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types";


export default async function createProducts(req: Request, res: Response): Promise<void> {
   try {

      const { name, price, image } = req.body

      if (!name || !price || !image) {
         res.statusCode = 422
         throw "'name', 'email' e 'password' são obrigatórios"
      }

         await connection("labecommerce_products")
         .insert({name, price, image})

      res.status(201).end("Produto criado!")

   } catch (error) {
      if(error instanceof Error){
          res.send({error, message:error.message})
      }else{
          res.send({message: "Unexpected error"})
      }
  }
}
