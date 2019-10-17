var split= require ('split')
var through2 = require ('through2')
var lineCount=0
process.stdin.pipe(split()).pipe(through2(function(buf, _, next){
  var line=buf.toString()

  this.push( lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
   )
   lineCount++

  next();
})
).pipe(process.stdout)