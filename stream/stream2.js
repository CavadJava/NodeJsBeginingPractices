var fs = require('fs');
var http = require('http');
http.createServer(function(request,response){
  var newFile = fs.createWriteStream('readme_copy.md');
  request.pipe(newFile);

  request.on('end',function() {
    response.end('uploaded!');
  });
}).listen(3333);
//curl --upload-file readme.md http://localhost:3333