const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const PROJECT3_DB = process.env.MONGODB_URI;

const citiesController = require('./controllers/cities.js');
app.use('/cities', todosController);


mongoose.connect('mongodb://localhost:27017/cities', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
})
app.listen(3000, () => {
  console.log('listening');
})
