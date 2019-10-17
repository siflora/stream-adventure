const concat=require('concat-stream');

process.stdin.pipe(concat(function(buf){
var a= buf.toString().split('').reverse().join('');
console.log(a)
}))
