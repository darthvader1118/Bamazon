var http = require('http');
var fs = require('fs');
var url = require('url');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
  fs.readFile("index.html", function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
  var urlParts = url.parse(request.url)

  // construct a router with a switch statement
  switch(urlParts.pathname){
    case '/':
      displayRoot(urlParts.pathname, request, response);
      break;
    case '/favFood':
      displayPortfolio(urlParts.pathname, request, response);
      break;
    case '/edit':
      console.log("this is the edit page");
      break;
    default:
      displayError(urlParts.pathname, request, response);
  }
}

server.listen(PORT, function(){
  console.log("Server is listening on port: " + PORT);
});