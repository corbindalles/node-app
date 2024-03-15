var http = require('http');
var url = require('url');
http.createServer(function(request, respone){  
  respone.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node JS Server Response');
  response.end( );
  pathName= url.parse(request.url).pathname;
  console.log(pathName);  
}).listen(7000);
