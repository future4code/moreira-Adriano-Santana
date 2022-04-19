import app from "./app";
import {Request, Response} from "express";
import connection from "./connection";

app.post("/TodoListUser", async (req: Request, res: Response) => {
    try{
        await connection.raw(`
        INSERT INTO TodoListUser(id, name, nickname,email)
        VALUE(${Date.now().toString()},
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
         );        
        `)
            res.status(201).send("Sucesso na sua tentativa!")
}
catch(error: any){
    console.log(error.message);
    res.status(500).send("Um erro inexperado ocorreu!")
    }
})

app.get("/TodoListUser/:id", async (req: Request, res: Response) => {
    try{
        await connection.raw(`
        INSERT INTO TodoListUser(id, name, nickname, email)
        VALUE(${Date.now().toString()},
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
         );        
        `)
            res.status(201).send("Sucesso na sua tentativa!")
}
catch(error: any){
    console.log(error.message);
    res.status(500).send("Um erro inexperado ocorreu!")
    }
})
