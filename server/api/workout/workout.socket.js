/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Workout = require('./workout.model');

exports.register = function(socket) {
  Workout.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Workout.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('workout:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('workout:remove', doc);
}