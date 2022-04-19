const http = require('http');
// ip and port number connects application
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.writeHead(200, {'Content-Type': 'text/plain' });
        response.end('Hello World!');
    } else if (request.url == '/test') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Test Passed");
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Not Found.');
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

