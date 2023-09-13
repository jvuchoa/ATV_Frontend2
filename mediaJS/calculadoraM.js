function calcularMedia() {
    let nota1 = parseInt(prompt("Digite a primeira nota:")); // solicita a primeira nota e converte para inteiro
    let nota2 = parseInt(prompt("Digite a segunda nota:")); // solicita a segunda nota e converte para inteiro
    let nota3 = parseInt(prompt("Digite a terceira nota:")); // solicita a terceira nota e converte para inteiro
    
    // calcula a média ponderada
    let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);
    
    console.log("A média é:", media); // exibe a média calculada
    }
    calcularMedia(); // chama a função para executar o programa