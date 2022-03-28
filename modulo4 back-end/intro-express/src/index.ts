import express from "express";
import { user } from "./user";
import {post} from "./posts"
const app = express();

app.use(express.json());
const porta = 3333
const server = app.listen(porta, () => {
  if (server) {
        console.log(`Server is running in http://localhost:${porta}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
app.get("/", (req, res) => {          
   return res.status(200).json({mensagem:"Hello from Express"})
})
app.get("/users", (req, res) => {          
    const userData = user.map((user)=>{
        return user
    })
    return res.status(200).send(userData)
 })
 app.get("/posts", (req, res) => {          
    const postsData = post.map((posts)=>{
        return posts
        
    })
    
    return res.status(200).send(postsData)
 })
 app.get("/users/posts/:id", (req, res) => {      
     const id = req.params.id    
    const postsUser = post.filter((posts)=>{
        return posts.userId ===Number(id)
        
    })
    .map((res)=>{
        return res
    })
    
    return res.status(200).send(postsUser)
 })