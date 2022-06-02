class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: IDBTransaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }  
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getBalance() {
        return this.balance;
    }
    getTransactions() {
        return this.transactions;
    }
}

//   - Exercício 1
    
//     Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas 
//     e responda as perguntas discursivas em comentários no arquivo `index.ts`

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// R: Um construtor serve para instanciar objetos da classe na qual esse construtor foi definido.
// A inicialização de objetos por meio de construtores é necessária para evitar erro de referência 
// nula quando usando objetos que foram declarados mas não inicializados.
// Podemos inicializar chamando o construtor e instanciando a classe.


// b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe 
// (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem 
// "Chamando o construtor da classe User" foi impressa no terminal?
//R:

//c) Como conseguimos ter acesso às propriedades privadas de uma classe?
//R: Conseguimos acessar por meio da Keyword THIS.


// - Exercício 2
    
// Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. 
// Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, 
// todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses valores, 
// tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à 
// instância já criada de UserAccount.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }



class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
    getDate() {
        return this.date;
    }
    getValue() {
        return this.value;
    }
    getDescription() {
        return this.description;
    }
  }