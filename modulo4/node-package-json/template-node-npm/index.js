// podemos atribuir o valor em uma variavel que será acessado pela propriedade process.argv[]

const nome = (process.argv[2])
const idade = Number(process.argv[3]) 

const idadeFutura = idade + 7 


const frase = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos
você terá ${idadeFutura} anos.`  


console.log(frase);
