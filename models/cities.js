const mongoose = require('mongoose');


const citiesSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

const Cities = mongoose.model('Cities', citiesSchema);

module.exports = Citites;
