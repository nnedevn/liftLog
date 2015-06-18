'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  name: String,
  info: String,
  exList: Array
});

module.exports = mongoose.model('Workout', WorkoutSchema);