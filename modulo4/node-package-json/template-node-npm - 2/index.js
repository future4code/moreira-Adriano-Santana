

const calcular = (process.argv[2]);
const valorum = Number(process.argv[3]);
const valordois = Number(process.argv[4]);

switch (calcular) {
  case "add":
    console.log(valorum + valordois);
    break;
  case "sub":
    console.log(valorum - valordois);
    break;

  case "mult":
    console.log(valorum * valordois);
    break;
  case "div":
    console.log(valorum / valordois);
    break;
} 
console.log(calcular);
