const http = require("http");
const fs = require("fs");

const buses = [
    { time: 805, line: 411, destination: 'Gliwice' },
    { time: 809, line: 420, destination: 'Katowice' },
    { time: 822, line: 411, destination: 'Gliwice' },
    { time: 255, line: 420, destination: 'Katowice' },
]

const compareTime = (a, b) => {
    let hourA = Math.floor(a/100);
    let minA = a%100;
    a = hourA * 60 + minA;

    let hourB = Math.floor(b/100);
    let minB = b%100;
    b = hourB * 60 + minB;

    return b - a;
}

let server = http.createServer((req, res) => {
    switch(req.url)
    {
        case "/":
        case "/index.html":
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.end('Works!');
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('Page not found');
            break;
    }
});
server.listen(2137, 'localhost');