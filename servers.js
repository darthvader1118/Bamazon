var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

function handleRequestsGood(request, response){
  response.end('You are sooo awesome! ');
}

function handleRequestBad(request, response){
  response.end('You are the worst person imaginable! ');
}
var server = http.createServer(handleRequestsGood);
var server2 = http.createServer(handleRequestBad)
server.listen(PORT, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT);
});

server2.listen(PORT2, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT2);
});

