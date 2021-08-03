// dogs endpoints will come here
const express = require('express')
const router = express.Router()
const Dog = require('./dogs-model')

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
// using async/await
router.get('/', async (req, res) => {
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

// THIS DOES NOT RUN
// the above one runs
// because it comes first
// SHOULD BE DELETED
router.get('/', (req, res) => { // using ES6 promises
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

module.exports = router
