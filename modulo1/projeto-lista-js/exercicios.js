// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo (){
 const altura = Number(prompt("Digite a altura do retangulo"))
 const largura = Number(prompt("Digite a largura do retangulo"))
   
console.log(altura*largura)  
}

console.log(calculaAreaRetangulo(3,5))

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual"))
   const anoNascimento = Number(prompt("Em que ano você nasceu ?"))
console.log(anoAtual - anoNascimento)   

}

// EXERCÍCIO 03
function calculaIMC (peso, altura) {
const imc = peso / (altura * altura)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(){
  const nome = prompt("digite seu nome!!")
  const idade = prompt("digite sua idade!!")
  const email = prompt("digite seu email!!")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(){
const cor1 = prompt("Digite sua cor preferida")
const cor2 = prompt("Digite sua segunda cor preferida")
const cor3 = prompt("Digite sua terceira cor preferida")
const cores = [cor1,cor2,cor3]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
string = string.toUpperCase()
return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}