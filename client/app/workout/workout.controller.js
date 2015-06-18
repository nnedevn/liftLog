'use strict';

angular.module('liftlogApp')
    .controller('WorkoutCtrl', function ($scope, $http, $location, $routeParams) {
        $scope.path = $location.path();

        $scope.message = 'Hello';
        var currentWorkout = $routeParams.workout_ID;
        var currentEx = $routeParams.exID;
        $scope.currentEX = currentEx;


        $http.get('/api/workouts').success(function (workouts) {
            $scope.workouts = workouts;
            $scope.workout = workouts[currentWorkout];
            $scope.exList = workouts[currentWorkout].exList;
            socket.syncUpdates('workout', $scope.workouts);

        });

        $scope.addEx = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/workouts', {name: $scope.newThing});
            $scope.newThing = '';
        };

        $scope.deleteEx = function (thing) {
            $http.delete('/api/workouts/' + thing._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('workout');
        });
    });
