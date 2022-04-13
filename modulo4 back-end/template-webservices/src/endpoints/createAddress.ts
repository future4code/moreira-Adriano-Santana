import {Request, Response} from "express";
import { getAddressInfo } from "../service/getAddressInfo";


export const createAddress = async (req: Request, res: Response) =>{
    try {
        const {zipcode} = req.body
        const address = await getAddressInfo(zipcode)
        if(!address) {
            throw new Error("Error on get address")
        }
        res.send(address)
        } catch (error) {
        if(error instanceof Error){
            res.send({error, message:error.message})
        }else{
            res.send({message: "Unexpected error"})
        }
    }
}