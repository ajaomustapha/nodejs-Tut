
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//Register a listener
myEmitter.on('messageLogged', (args) => {
  console.log('Listener Called', args);
});

//Raise an event
myEmitter.emit('messageLogged', { id: 1, url: 'https://' });

