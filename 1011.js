var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines.shift());

let valorEsfera = (4/3.0 * (3.14159 * (R * R * R)));

console.log(`VOLUME = ${ValorEsfera.toFixed(3)}`);