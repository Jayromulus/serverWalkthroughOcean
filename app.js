// configure the app to use the environment file
require('dotenv').config();

// import the express module and store the information in a variable
const Express = require('express');

// make a new instance of Express, unlocking the ability to use HTTP requests, middleware, and some other basic application settings
const app = Express();

// import the database connection
const database = require('./db');

database.sync();

app.use(Express.json());

app.use(require('./middleware/headers'));

// SERVING A STATIC FILE
// app.use(Express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (request, response) => response.render('index'));

// // import the pie controller
// const pies = require('./controllers/piecontroller');

// use the piecontroller routes if we are at localhost:8080/pies
// app.use('/pies', pies);
// '/pies' is going to prepend the /pies route before ANY of the routes from this pies controller, so if a route in the pie controller is just '/', we will have to go to '/pies/'

const pizza = require('./controllers/pizzacontroller');
app.use('/pizza', pizza);

const user = require('./controllers/usercontroller');
app.use('/user', user);

// this will start our server on port 8080, and run a console.log telling us that the server is running
app.listen(process.env.PORT, function() { console.log(`app is listening on ${process.env.PORT}`) });