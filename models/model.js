// models/YourModel.js
const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  // Define your schema based on Figma design
  // For example:
  name: String,
  description: String,
});

const YourModel = mongoose.model('YourModel', yourSchema);

module.exports = YourModel;
