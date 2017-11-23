debugger;
console.log('a');
console.log('b');
/**
*
*
*
*/
function test(...args) {
console.log('e');
debugger;
const b = args;
console.log('f');
}
console.log('c');
console.log('d');

test();