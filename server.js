//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const citiesController = require('./controllers/cities.js');
app.use('/cities', todosController);

const PROJECT3_DB = process.env.PROJECT3_DB

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));
app.listen(3000, () => {
  console.log('listening');
})
