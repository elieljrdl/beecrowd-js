var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let NUMBER = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorHorasTrabalhadas = parseFloat(lines.shift());

let SALARY = horasTrabalhadas * valorHorasTrabalhadas;

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);

