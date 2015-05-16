var http= require("http");


var server = http.createServer(function(req,res){
	res.writeHead(200,{"content-type":"text/html"});
	res.end("<h1>Fin de la petición</h1>");
});

server.listen(8888);
console.log("Listening ..");
