import { IUserData } from "../model/InterfaceUserData"
import User from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import { BaseDatabase } from "./BaseDatabase"

export default class UserData extends BaseDatabase implements IUserData{
    protected TABLE_NAME = "labook_users"

    insertUser = async (user: User): Promise<User>=> {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
                return user
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    findByEmail = async (email: string):Promise<User> => {
        try {
            const queryResult = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

}