const Express = require('express');
const router = Express.Router();

router.post('/pies', (request, response) => {
  // start writing js here
  function test() {
    console.log('this is a cool test');
  }
  test();
  response.send('I love pies!')
});

router.put('/pies', (request, response) => response.send('I HATE pies!'));

router.get('/', (req, res) => res.send('Welcome to Pie Land!'));

// export the router to be available in different files
module.exports = router;