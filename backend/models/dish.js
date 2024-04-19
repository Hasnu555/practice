// models/Dish.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true }
});

module.exports = mongoose.model('Dish', dishSchema);

