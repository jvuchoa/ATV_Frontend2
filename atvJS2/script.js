
let dadosUsuario = [];
let alturasHomens = [];
let quantidadeHomens = 0;
let quantidadeMulheres = 0;
let alturaMediaHomens = 0;

function calcularMedia(array) {
    if (array.length === 0) {
        return 0;
    }
    const soma = array.reduce((acc, altura) => acc + altura, 0);
    return soma / array.length;
}

// Função para adicionar um dado do usuário
function adicionarDado() {
    if (dadosUsuario.length >= 5) {
        alert("Você já inseriu 5 dados. Os resultados serão calculados agora.");
        calcularResultados();
        return;
    }

    const genero = prompt("Digite o gênero (masculino/feminino):").toLowerCase();
    const altura = parseFloat(prompt("Digite a altura em cm:"));

    if (genero !== "masculino" && genero !== "feminino" || isNaN(altura) || altura <= 0) {
        alert("Dados inválidos. Tente novamente.");
        return;
    }

    dadosUsuario.push({ genero, altura });
    if (genero === "masculino") {
        quantidadeHomens++;
        alturasHomens.push(altura);
    } else {
        quantidadeMulheres++;
    }

    alert("Dado adicionado com sucesso!");
    adicionarDado();
}

// Função para calcular e exibir os resultados
function calcularResultados() {
    if (dadosUsuario.length === 0) {
        alert("Nenhum dado inserido.");
        return;
    }

    alturaMediaHomens = calcularMedia(alturasHomens);

    alert("Quantidade de homens: " + quantidadeHomens);
    alert("Quantidade de mulheres: " + quantidadeMulheres);
    alert("Altura média dos homens: " + alturaMediaHomens.toFixed(2) + " cm");
}

// Iniciar a coleta de dados
adicionarDado();
