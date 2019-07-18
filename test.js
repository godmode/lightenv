const assert = require('assert');
require('./index');

const test = (actual, expected, path) => {
  assert.equal(actual, expected);
  console.log(`SUCCESS: ${path} === ${expected}`);
};

try {
  test(process.env.SIMPLESTRING, 'MYVAR', 'process.env.SIMPLESTRING');
  test(process.env.ESCAPEDCHARS, '\n\r\t\"\'\\ESCAPE', 'process.env.ESCAPEDCHARS');
}
catch (err) {
  console.error('FAILED:', {
    actual: err.actual,
    expected: err.expected,
  })
}
