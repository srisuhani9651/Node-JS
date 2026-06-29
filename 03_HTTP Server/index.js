const http = require('http')

const server = http.createServer(function(req, res){ // here created a server using http.createServer
    // console.log("I got a request"); // pass in a callback function, req is for what client is sending the request and res what server construct a response
    // //db...
    // res.writeHead(200) // this 200 for success the server running
    // res.end("Thanks for giving me the response")
    // console.log(`Incoming request at [${Date.now()}]`);
    // console.log(req.headers);

    //..

    switch(req.url){

        case '/':
             res.writeHead(200)
            return res.end('Homepage')
        case '/contact-us':
             res.writeHead(200)
            return res.end('Contact me at suhanisri@gmail.com')
        case '/about':
             res.writeHead(200)
            return res.end('Hi, I am Suhani Srivastava, a Software Developer')
        default:
             res.writeHead(404)
            return res.end('You have lost')
    }

   
    // res.end('OK!')
    
    
})

server.listen(8000, function(){  // here the server listen and the success callback
    console.log(`HTTP server is up and running on port 8000`);
    
})