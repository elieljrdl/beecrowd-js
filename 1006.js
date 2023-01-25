var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

MEDIA = (A * 2.0 + B * 3.0 + C * 5.0) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`)
