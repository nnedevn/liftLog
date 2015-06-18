'use strict';

var _ = require('lodash');
var Workout = require('./workout.model');

// Get list of workouts
exports.index = function(req, res) {
  Workout.find(function (err, workouts) {
    if(err) { return handleError(res, err); }
    return res.json(200, workouts);
  });
};

// Get a single workout
exports.show = function(req, res) {
  Workout.findById(req.params.id, function (err, workout) {
    if(err) { return handleError(res, err); }
    if(!workout) { return res.send(404); }
    return res.json(workout);
  });
};

// Creates a new workout in the DB.
exports.create = function(req, res) {
  Workout.create(req.body, function(err, workout) {
    if(err) { return handleError(res, err); }
    return res.json(201, workout);
  });
};

// Updates an existing workout in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Workout.findById(req.params.id, function (err, workout) {
    if (err) { return handleError(res, err); }
    if(!workout) { return res.send(404); }
    var updated = _.merge(workout, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, workout);
    });
  });
};

// Deletes a workout from the DB.
exports.destroy = function(req, res) {
  Workout.findById(req.params.id, function (err, workout) {
    if(err) { return handleError(res, err); }
    if(!workout) { return res.send(404); }
    workout.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}