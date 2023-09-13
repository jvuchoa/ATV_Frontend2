var mulheres = 0;
var alturaMaxima = -400;
var alturaMinima = 400;
var somaAlturaHomens = 0;
var countHomens = 0;
var totalEntradas = 0;

var formulario = document.getElementById("genalt");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    var generoSelecionado = document.querySelector('input[name="genero"]:checked');
    var altura = parseFloat(document.getElementById("altura").value);

    if (generoSelecionado !== null) {
        if (generoSelecionado.value === "feminino") {
            mulheres++;
        } else if (generoSelecionado.value === "masculino") {
            somaAlturaHomens += altura;
            countHomens++;
        }

        alturaMaxima = Math.max(alturaMaxima, altura);
        alturaMinima = Math.min(alturaMinima, altura);

        totalEntradas++; // Incrementa o contador de entradas

        if (totalEntradas === 15) {
            var mediaAlturaHomens = somaAlturaHomens / countHomens;
            alert("Quantidade de mulheres: " + mulheres +
                "\nAltura máxima: " + alturaMaxima +
                "\nAltura mínima: " + alturaMinima +
                "\nMédia de altura entre os homens: " + mediaAlturaHomens.toFixed(2) + " cm");

            formulario.reset();
        }
    }
});

