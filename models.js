const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: {type: String, required: true},
  url: {type: String, reqruied: true},
  votes: {type: Number}
});

newsSchema
