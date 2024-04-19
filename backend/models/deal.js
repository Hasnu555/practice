// models/Deal.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dealSchema = new Schema({
  dishNames: [String],
  totalCalories: { type: Number }
});

  module.exports = mongoose.model('Deal', dealSchema);
  