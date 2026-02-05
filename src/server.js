const http =require('node:http');
const user = require('./mocks/user');
const userJson =JSON.stringify(user);

http.createServer(function(request, response){
if (request.url ==='/users'){
    response.writeHead(200,
    {'content-type': 'application/json'}
);
response.end(userJson);
return;
}

    response.writeHead(200,{'content-type': 'text/html; charset=utf-8'});
response.end('<h1>Olá cliente</h1>');
}).listen(3000);