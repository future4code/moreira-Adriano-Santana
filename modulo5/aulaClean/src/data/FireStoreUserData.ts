import * as admin from 'firebase-admin'
import { IUserData } from '../model/InterfaceUserData';
import User from '../model/User';

// Usar isso dentro do terminal 
// export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://aulaclean.firebaseio.com'
});

export default class FireStoreUserData implements IUserData{
    
     async findByEmail(email: string){
        try {
            const result =  await admin.firestore().collection('labook').get()
            return result.docs.map(doc =>doc.data())
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    async insertUser(user:User): Promise<User>{
        try{ 
            await admin.firestore().collection("labook").doc(user.id).set(
                {
                    name: user.name,
                    email: user.email,
                    password: user.password
                }
            )
            return user
        }catch(error:any){
            throw new Error(error.message)
        }
    }


}
