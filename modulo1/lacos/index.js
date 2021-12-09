//// Exercícios de interpretação de código

// 1ª
/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */

//resp: O código está repetindo a variável valor dizendo que enquando o 
//valor for menor que 0 o código vai rodar e imprimir no console.
 
// *************************************************************************
// 2 ª interpretação

// a) A condição é ler arrays com valor maior que 18.

// b) sim é possível criamos uma variavel fora  indice, e adicionamos  o indice  no console e acrencentamos o incremento.

//***************************************************************************

//3ª
 
/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */


// ===================== Exercícios de escrita de código =================
// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
/* a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array


    
    <aside>
     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma
      quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    
    </aside>
  c) Por fim, imprima o array com os nomes dos bichinhos no console */
/* 
   let petdoUsuario = Number(prompt("Olá quantos bichinhos de estimação você tem?"))
  
  if(petdoUsuario === 0){
    console.log("Que pena adote um pet")
  }
  if(petdoUsuario > 0){ 
  
      listadeBichos =[]
  }
  for(let i=0; i< petdoUsuario; i++){
    const nomedosAnimais = prompt("Digite o nome do seu pet")
    listadeBichos.push(nomedosAnimais)
      
 }
 console.log(listadeBichos) */





