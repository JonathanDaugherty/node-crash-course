const EventEmitter = require('events');

// Create Class
class myEmitter extends EventEmitter { }

// init object

const myemitter = new myEmitter();

//Event Listener
myemitter.on('event', () => console.log('Event Fired'));

myemitter.emit('event');
myemitter.emit('event');
myemitter.emit('event');
myemitter.emit('event');