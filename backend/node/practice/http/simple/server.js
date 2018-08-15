const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
});

server.listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중입니다!');
});

server.on('error', (error) => {
    console.error(error);
}); 