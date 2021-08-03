// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();

server.use(express.json());

const Dog = require('./dogs/dogs-model');

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
// using async/await
server.get('/api/dogs', async (req, res) => {
  try {
    // if something crashes here
    console.log('getting dogs with async/await!')
    const dogs = await Dog.find() // looks like sync code!!
    res.status(200).json(dogs)
  } catch (err) {
    // we can "recover" here, take a look at the error (err)
    res.status(500).json({ message: `Something happened: ${err.message}` })
  }
})

server.get('/api/dogs', (req, res) => { // using ES6 promises
  Dog.find()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dogs',
      });
    });
});

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
