
type Pessoa ={
 nome:string,
 dataNascimento:string   
}
function mensagem(pessoa:Pessoa) {
    const data: string[] = pessoa.dataNascimento.split("/")
    console.log (`Olá, me chamo ${pessoa.nome}, nasci no dia ${data[0]} do mês ${data[1]} do ano ${data[2]}`)
}
mensagem({nome:"Adriano",dataNascimento:"13/04/1988"})
