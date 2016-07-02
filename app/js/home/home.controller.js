(function() {
  "use strict";

  var homeController = function($scope) {
    $scope.message = "Hello, home page";
  };

  module.exports = {
    name: "homeController",
    type: "controller",
    func: homeController
  };

})();
