const http = require('http');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    for (let i = 0;i < os.cpus().length;i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`pid ${worker.process.pid} died`);
    });
} else {
    console.log(`process ${process.pid} started`);

    http.createServer((req, res) => {
        res.end('process will die after one second');
        setTimeout(() => {
            process.exit(0);
        }, 1000);
    }).listen(8080);
}
