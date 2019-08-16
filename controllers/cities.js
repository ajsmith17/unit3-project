// ================
//    Dependencies
// ================
const express = require('express');
const router = express.Router();
const Cities = require('../models/cities.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// ================
//    Routes
// ================
// Index route
router.get('/', (req, res) => {
  Cities.find({}, (err, foundCities) => {
    res.json(foundCities);
  });
});
// Create Route
router.post('/', (req, res) => {
  Cities.create(req.body, (err, addedCity) => {
    res.json(addedCity);
  });
});
// Delete Route
router.delete('/', (req, res) => {
  Cities.findByIdAndRemove(req.params.id, (err, deletedCity) => {
    res.json(deletedCity);
  });
});
//  Edit Route
router.put('/', (req, res) => {
  Cities.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCity) => {
    res.json(updatedCity);
  });
});

module.exports = router;
