import express,{Request,Response} from "express";
import { eletronicos } from "./data";


const app = express();
app.use(express.json());
const port = 3333
const server = app.listen(port, () => {
    if (server) {

        console.log(`Servidor está rodando in http://localhost:${port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
app.get("/test",(req:Request,res:Response)=>{
    return res.status(200).json({message:"Teste realizado com sucesso"}) 
})
app.post("/novoproduto", (req: Request, res: Response) => {
    const criarProduto = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price,
    }
    const novaListaDeProdutos = [...eletronicos, criarProduto];
    return res.status(200).send(novaListaDeProdutos); 
})
