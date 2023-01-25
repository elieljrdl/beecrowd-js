var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nomeVendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let vendasTotal = parseFloat(lines.shift());

let procetagemSobreVendas = (vendasTotal * 0.15) + salarioFixo;

console.log(`TOTAL = R$ ${procetagemSobreVendas.toFixed(2)}`);
