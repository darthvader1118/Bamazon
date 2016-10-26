var http = require('http');

var PORT = 8080;

function handleRequests(request, response){
  response.end('It Works! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequests);

server.listen(PORT, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT);
});