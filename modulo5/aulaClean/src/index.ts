import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import UserController from "./controller/UserController";
import FireStoreUserData from "./data/FireStoreUserData";
import UserData from "./data/UserData";
import User from "./model/User";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userBusiness = new UserBusiness(
    new FireStoreUserData(),
)

const userController = new UserController(
    userBusiness
);

app.post("/user/signup", userController.signup)

