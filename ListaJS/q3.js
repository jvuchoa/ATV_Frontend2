const quantidade = parseInt(prompt("Digite a quantidade de números:"));

let menor = Infinity; 
let maior = -Infinity; 
let soma = 0;

for (let i = 0; i < quantidade; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

    if (numero < menor) {
        menor = numero;
    }
    if (numero > maior) {
        maior = numero;
    }


    soma += numero;
}

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);
