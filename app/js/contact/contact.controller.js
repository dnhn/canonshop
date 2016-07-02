(function() {
  "use strict";

  var contactController = function($scope) {
    $scope.text = "Contact us";
  };

  module.exports = {
    name: "contactController",
    type: "controller",
    func: contactController
  };

})();
