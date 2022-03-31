import {users} from "./data"

import express from "express";

const app = express();

app.use(express.json());

const port = 3333

const server = app.listen (port, () => {
  if (server) {
    
    console.log(`Server is running in http://localhost:${port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
// metodo get e entidade users
app.get("/users", (req, res) => {
  try {
    if (!users) {
      throw new Error("Usuarios não encontrado.");
    }
    res.status(200).send(users);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});