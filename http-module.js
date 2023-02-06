const http = require('http');
http.createServer(function(req, res){
  res.writeHead(200,{'content-type':'text/html'});
  if(req.url === '/'){
    res.end("Hello Welcome My Node JS Server");
  }else{
    res.end("Hello");
  }
  // res.write("Hello Welcome My Node JS Server");
  // res.end();
}).listen(8080);