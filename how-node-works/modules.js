// console.log(arguments);
// console.log(require('module').wrapper);

// ! module.exports

const Calculater = require('./test-module-1');

const cal1 = new Calculater();

const addition = cal1.add(2, 5);

console.log(addition);

// ! exports
// const calc2 = require('./test-module-2');
const { add, multiply, divide } = require('./test-module-2');

console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(divide(2, 5));

// ! caching

require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
