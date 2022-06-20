import User from "./User"

export interface IUserData{
    findByEmail(email: string):void
    insertUser(user:User):Promise<User>
}

