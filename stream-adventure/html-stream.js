const trumpet= require ('trumpet');
const fs= require ('fs')
var tr= trumpet();
fs.createReadStream(process.argv[2]).pipe(tr);
var stream=tr.select('.loud').createStream().toString().toUpperCase();
console.log(stream)