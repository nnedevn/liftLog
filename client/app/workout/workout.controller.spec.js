'use strict';

describe('Controller: WorkoutCtrl', function () {

  // load the controller's module
  beforeEach(module('liftlogApp'));

  var WorkoutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkoutCtrl = $controller('WorkoutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
