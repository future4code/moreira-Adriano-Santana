import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user} from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
           console.log(users)
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
      // res.send(error.message || error.sqlMessage)
    }
 }
 export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, password
       FROM aula49_users;
    `)
 
    return result[0]
 }