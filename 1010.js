var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var [idPeca1, qntdPeca1, valorPeca1] = lines.shift().split(" ");
var [idPeca2, qntdPeca2, valorPeca2] = lines.shift().split(" ");

let valorTotalPeca1 = qntdPeca1 * valorPeca1;
let valorTotalPeca2 = qntdPeca2 * valorPeca2;

let valorTotalCompra = valorTotalPeca1 + valorTotalPeca2;

console.log(`VALOR A PAGAR: R$ ${valorTotalCompra.toFixed(2)}`);

