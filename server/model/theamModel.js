const mongoose = require("mongoose");

const theameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  liveSite: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const theam = new mongoose.model("theams", theameSchema);

module.exports = theam;
