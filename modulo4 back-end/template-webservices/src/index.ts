import app from "./app"
import createUser from './endpoints/createUser'
import { createAddress } from './endpoints/createAddress'


app.post('/users/signup', createUser)

app.post('/users', createAddress)