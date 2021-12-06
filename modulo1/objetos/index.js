/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
// Exercícios de interpretação de código

// 1.

console.log(filme.elenco[0]) // imprimir objeto filme chamar a 
 chave elenco que possui uma array, e chamar a array na posição[0] Matheus Nachtergaele

console.log(filme.elenco[filme.elenco.length - 1]) 
imprimir objeto filme chamar a chave elenco e pegar a ultima array Virginia Cavendish

console.log(filme.transmissoesHoje[2]) */
/* imprimir objeto filme chamar a chave transmissões
 que possuim uma array e chamar a posição 2 -canal: "Globo", horario: "14h" */

 //2.
 /* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)   // imprime objeto cachorro como suas propriedades e valores.

console.log(gato) // foi usado uma spread ...cachorro e utilizado a chave nome e modificado o valor da chave para juba.

console.log(tartaruga) *//*  foi usado uma spread ...gato a chave nome foi utilizada e para o
 valor juba foi alterado tudo que tem a  letra a "a"" passa a ter a letra "o" e o nome passou a ser "jubo".
 a sintaxe dos três pontos ela copias todas as propriedades e valores de um objeto que pode ser utilizado em outro objeto.
 */







 // Exercícios de escrita de código

 //1.
      const pessoa = {
    nome: "Adriano", 
    apelidos:["Brito","Adrianinho","dri"]
 }
 console.log(`Eu me chamo ${pessoa.nome},mas pode me chamar de ${pessoa.apelidos[0]},${pessoa.apelidos[1]},${pessoa.apelidos[2]}`)

     meuApelido ={
 ... pessoa,
 apelidos: ["Bode","Britox","Diano"]
  } 
   function novosApelidos(objeto){
      console.log(`Eu me chamo ${objeto.nome},mas pode me chamar de ${objeto.apelidos[0]},${objeto.apelidos[1]},${objeto.apelidos[2]}`) 
   }
  novosApelidos(meuApelido) 

  /* 2 
      const dadosDapessoa ={
      nome:"Adriano",idade:33,profissa:"Consutor de seguros"
  }
  const  */