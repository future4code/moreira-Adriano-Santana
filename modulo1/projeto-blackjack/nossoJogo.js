/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 
const texto = ("Boas vindas ao jogo de Blackjack!")
console.log(texto)
const iniciarRodada = confirm("Quer iniciar uma nova rodada?")
if(confirm("pergunta de sim ou não")){
	
   iniciarRodada()
} else { 
   console.log("O jogo acabou !")
	
}
//function IniciarRodada()
