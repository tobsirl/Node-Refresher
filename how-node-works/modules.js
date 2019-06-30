// console.log(arguments);
// console.log(require('module').wrapper);

const Calculater = require('./test-module-1');

const cal1 = new Calculater();

const addition = cal1.add(2, 5);

console.log(addition);
