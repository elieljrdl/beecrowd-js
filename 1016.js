var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());

let tempoNecessario = distancia * 2;

console.log(`${tempoNecessario} minutos`);

