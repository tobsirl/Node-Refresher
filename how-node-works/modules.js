// console.log(arguments);
// console.log(require('module').wrapper);

// ! module.exports

const Calculater = require('./test-module-1');

const cal1 = new Calculater();

const addition = cal1.add(2, 5);

console.log(addition);

// ! exports
const calc2 = require('./test-module-2');

console.log(calc2.add(2, 5));
