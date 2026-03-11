const http = require('http');

const server = http.createServer((req, res) => {
    res.write("CloudCommerce API running");
    res.end();
});

server.listen(3000);