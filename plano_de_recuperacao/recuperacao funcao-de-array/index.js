//-interpretação de código
/* 1 a) um array igual ao original
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },posição 0
    { nome: "Laís Petra", apelido: "Laura" },1
    { nome: "Letícia Chijo", apelido: "Chijo" }2
  ] */
// b)  ["Amanda Rangel", "Laís Petra",  "Letícia Chijo",]

// 2) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3. { nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" },

// Exercícios de escrita de código

/* 1- a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const pet = pets.map((caes)=>{
     return caes.nome
      
 })
 console.log(pet)  */

// b)
/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const racaCachorro = pets.filter((item, index, array)=>{
    return item.raca === "Salsicha"
 })
   console.log(racaCachorro) */

//c)
/* const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const novoArrayCachorro = pets.filter((item, index, array) => {
  return item.raca === "Poodle";
});

const mensagemCachorro = novoArrayCachorro.map((item, index, array) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a, ${item.nome}`;
});
console.log(novoArrayCachorro)
console.log(mensagemCachorro) */

// 2 -------------------------
// a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
   /*a)  const prod = produtos.map ((item)=>{
        return item.nome
    })
    console.log(prod)  */

     /*  const desconto = produtos.map((item)=>{
        return (
             { nome: item.nome, preco:(item.preco * 0.05).toFixed(2)})
     })
     console.log(desconto)
     
    //c) */
    /* const mostrarCategoriaBebidas = produtos.filter ((item)=>{
        return item.categoria === "Bebidas"
    })
    console.log(mostrarCategoriaBebidas) */
    //d)
   /*  const nomesComYpe = produtos.filter((item, index, array) => {

        return item.nome.includes("Ypê")
        
        })
        
        const mensagemItensProdutos = nomesComYpe.map((item, index, array) => {
            
        return `Compre ${item.nome} por ${item.preco}`
        
        })
        
        console.log(mensagemItensProdutos) */