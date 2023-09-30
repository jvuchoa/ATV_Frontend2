const readline = require('readline')
const r3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//salario incial em 1995
var Salarioinicial = parseFloat(1000);

//Reajuste salarial em 1996
var PrimeiroReajuste = parseFloat(1.5/100);

//Reajuste salarial em 1997
var AjusteFinal =parseFloat(3/100);

var Salario96 = parseFloat(Salarioinicial + (Salarioinicial * PrimeiroReajuste));
var Sa96 = Salario96 * 12;
console.log(`O salario do funcionario em 1996 passou de 1000, para  ${Salario96} \n`  
+`Assim, dando uma renda anual de ${Sa96}`)

var Salario97 = parseFloat(Salarioinicial + (Salarioinicial*AjusteFinal));
var Sa97 = Salario97 * 12;
console.log(`O Salario do funcinario no ado de 1997. passou de ${Salario96}, \n para ${Salario97}, dando uma renda anual de ${Sa97}\n\n\n`)


r3.question("Informe seu salario incial: ", (enter) =>{
    const SalarioAT = parseFloat(enter)

    var SalarioF = parseFloat(SalarioAT + (SalarioAT * AjusteFinal))
    var sfa = SalarioF * 12
    console.log(`O seu salario incial, corresponde á ${SalarioAT}, e passou a ser ${SalarioF} \n
    Assim tendo uma renda anual de ${sfa}`)
})