// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');
const adoptersRouter = require('./adopters/adopters-router'); // bring router
const dogsRouter = require('./dogs/dogs-router'); // do not type your paths

const server = express();

server.use(express.json());
server.use('/api/adopters', adoptersRouter); // plug router in server
server.use('/api/dogs', dogsRouter);

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
