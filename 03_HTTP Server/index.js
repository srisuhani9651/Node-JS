const http = require('http')

const server = http.createServer(function(req, res){ // here created a server using http.createServer
    console.log("I got a request"); // pass in a callback function, req is for what client is sending the request and res what server construct a response
    //db...
    res.writeHead(200) // this 200 for success the server running
    res.end("Thanks for giving me the response")
})

server.listen(8000, function(){  // here the server listen and the success callback
    console.log(`HTTP server is up and running on port 8000`);
    
})