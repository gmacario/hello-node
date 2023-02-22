var http = require('http');

console.log("DEBUG: Starting server on localhost:8080");

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!\n\n');
};
var www = http.createServer(handleRequest);
www.listen(8080);
