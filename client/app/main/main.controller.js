'use strict';

angular.module('liftlogApp')
    .controller('MainCtrl', function ($scope, $http, socket, Auth) {
        $scope.awesomeThings = [];

        $http.get('/api/workouts').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $scope.isLoggedIn = Auth.isLoggedIn;

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/workouts', {name: $scope.newThing});
            $scope.newThing = '';
        };

        $scope.deleteThing = function (thing) {
            $http.delete('/api/workouts/' + thing._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('workout');
        });
    });
