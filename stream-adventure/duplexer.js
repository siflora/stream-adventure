const spawn = require('child_process').spawn
const stream = require ('stream')
const duplexer = require ('duplexer2')
module.exports = function(cmd, args) {
var ps = spawn(cmd, args)
return duplexer(ps.stdin, ps.stdout)
}