var C = parseFloat(1000);

var i = 5/100

var tA= 2;
const tM= tA /12;

var investimeto = C * (1 + i)**tM
const formato = investimeto.toFixed(2);


console.log(`${formato}`)