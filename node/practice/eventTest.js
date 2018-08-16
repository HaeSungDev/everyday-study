const EventEmitter = require('events');

const event = new EventEmitter();

let count =  0;
const handle = setInterval(() => {
    count++;
    if (count <= 5) {
        event.on('custom', () => {
            const eventNum = count;
            console.log(`custom event #${eventNum}`);
        })
        console.log(event.listenerCount('custom'));
    } else {
        event.removeAllListeners('custom');
        clearInterval(handle);
    }

    event.emit('custom');
}, 1000)