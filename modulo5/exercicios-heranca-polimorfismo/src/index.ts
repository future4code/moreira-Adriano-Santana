// Herança
// Exercicío 1 --------> 

// A) não pode ser atrelada pois password não é publica.
//b) 3 vezes
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }
    public interoduceYourself(): string {
        return `Olá,sou ${this.name}. Bom dia!`
     }
 
    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
    public getPassword(): string {
        return this.password
    }
}

const consulta = new User("5", "pedro@gmail", "Pedro Pancada", "labenu10")
console.log(consulta.getId())
console.log(consulta.getEmail())
console.log(consulta.getName())

// Exercicício 2 ------>

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}
const dados = new Customer("6","juquinha@gmail.com","Julio","labenu120","1")
const adriano = new User("Brito","brito@brito","1","123456")
console.log(dados.getName(),dados.getId(),dados.getEmail(),dados.getCreditCard())
console.log(dados.purchaseTotal)

console.log(adriano.getEmail(),adriano.getId(),adriano.getName())

// a ) foi impresso 3 vezes as informações
// b) a função getPassword não esta sendo chamada não está na classe User que está privada.

// Exercicío 3 --------->
// a) seria possível se declarar a função get e torna-la public.
const Constructor = new Customer ("5","paul@hotmail.com","Paulo","123","2545")
  console.log(Constructor.getId(), Constructor.getName(), Constructor.getEmail(), Constructor.getCreditCard(), Constructor.getPassword(), Constructor.purchaseTotal)
  
  // Exercicío 4 ------>
console.log(Constructor.interoduceYourself())

// Exercicío 5 ------>
console.log(Constructor.interoduceYourself())

// Polimorfismo *******************



