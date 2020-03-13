const isItGit = require('./index.js');

const result = isItGit() ? `TEST PASSED` : `TEST FAILED`;
console.log(result);
console.log();
