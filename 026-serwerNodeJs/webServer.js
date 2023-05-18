const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Node.js server!</h1>');
   
    switch (req.url)
    {
        case "/":
        case "/index.html":
            fs.readFile('website/index.html', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            break;
        case "/style.css":
            fs.readFile('website/style.css', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            });
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('Page not found');
            break;
    }

});
server.listen(3000, 'localhost');
