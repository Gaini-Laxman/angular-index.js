var http = require('http');

//create a server object:
var server = http.createServer((req, res) => {
    if(req.url=='/')
    
  res.write('WELCOME TO HOME PAGE '); //write a response to the client
  else if(req.url=='/aboutus')
  res.write('WELCOME TO About US PAGE ');
  else
  res.write('InValied PAGE ');
  res.end(); //end the response
 
});
server.listen(3333); //the server object listens on port 8080