
abstract class Cliente{
    private nome:string;

    constructor(nome:string){
        this.nome = nome
    }
}


class ClienteFisico extends Cliente{
   
    private idade:number
    private cpf:string

    constructor(nome:string,idade:number,cpf:string){
        super(nome)
        this.idade = idade;
        this.cpf = cpf
    }
}

class ClienteJuridico extends Cliente{
   
    private cnpj:string;

    constructor(nome:string,cpnj:string){
        super(nome)
        this.cnpj = cpnj
    }
}
const fulano1 = new ClienteFisico('fulano',40,'321-321-412-90')
const labenu1 = new ClienteJuridico('labenu','13213-3213-231/000')


interface Cliente1{
    name:string
}

interface ClienteFisico1 extends Cliente1{
    idade:number,
    cpf:string
}

interface ClienteJuridico1 extends Cliente1{   
    cnpj:string
}

const ciclano:ClienteFisico1 = {
    name:"fulano",
    idade:50,
    cpf:"123-321-421-90"
}

const labenu:ClienteJuridico1 ={
    name:"labenu",
    cnpj:"123-321-421-/00"
}

// analogia de Inversao de dependencia
// function App(

//     const [name,setName] = useState("")
//     const [sobrenome,setSobrenome] = useState("")

//     return(
//         <Card data={sobrenome} />
//     )
// )

// function Card = (props) = {

//     return(
//         <input data={props.data} />
//     )
// }


