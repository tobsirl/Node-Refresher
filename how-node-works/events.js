const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmitter.on('newSale', name => {
  console.log(`Costumer name: ${name.name}`);
});

myEmitter.on('newSale', stock => {
  console.log(`There are now ${stock.items} items left in stock.`);
});

const stockItems = {
  items: 9,
  name: 'Paul'
};

myEmitter.emit('newSale', stockItems);

// ! ////////////////////////////////////////////////////////////////////
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('Request received');
});

server.on('request', (req, res) => {
  res.end('Another request :angel:');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(3000, 'localhost', () => {
  console.log('Waiting for requests...');
});
