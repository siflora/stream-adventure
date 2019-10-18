const portfinder= require ('portfinder');
const http= require ('http')
const request = require ('request')
portfinder.getPort(function(err, port){
  var port=8099
})
var r=request.post('http://localhost:8099')
process.stdin.pipe(r).pipe(process.stdout)