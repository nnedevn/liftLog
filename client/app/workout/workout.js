'use strict';

angular.module('liftlogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/workouts', {
        templateUrl: 'app/workout/workout.html',
        controller: 'WorkoutCtrl'
      })
        .when('/workouts/:workout_ID', {
          templateUrl: 'app/workout/workout.html',
          controller: 'WorkoutCtrl'

        }).when('/workouts/:workout_ID/:exID',{
          templateUrl: 'app/workout/ex.html',
          controller: 'WorkoutCtrl'

        })
    ;
  });
