(function() {
  "use strict";

  var notFound = function($scope, $location, $timeout, $interval) {
    $scope.message = $location.url();
    $scope.countDown = 5;
    $timeout(function() {
      $location.path("/");
    }, ($scope.countDown * 1000));
    $interval(function() {
      if($scope.countDown > 0) $scope.countDown--;
    }, 1000);
  };

  module.exports = {
    name: "notfoundController",
    type: "controller",
    func: notFound
  };

})();
