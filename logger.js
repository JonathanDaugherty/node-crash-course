const EventEmitter = require('events');
const uuid = require('uuid') //creates a standard form of id

class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');