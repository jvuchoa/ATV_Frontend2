var mulheres = 0;
var altMax = -400;
var altMin = 400;
var s_AlturaHomens = 0;
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
            s_AlturaHomens += altura;
            countHomens++;
        }

        altMax = Math.max(altMax, altura);
        altMin = Math.min(altMin, altura);

        totalEntradas++; // Incrementa o contador de entradas

        if (totalEntradas === 15) {
            var mediaAlturaHomens = s_AlturaHomens / countHomens;
            alert("Quantidade de mulheres: " + mulheres +
                "\nAltura máxima: " + altMax +
                "\nAltura mínima: " + altMin +
                "\nMédia de altura entre os homens: " + mediaAlturaHomens.toFixed(2) + " cm");

            formulario.reset();
        }
    }
});

