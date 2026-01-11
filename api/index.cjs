const http = require('node:http');

const port = 8888;
const protocol = 'https';
const url = 'pokeapi.co';

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      data: 'Hello World!',
    })
  );
});
