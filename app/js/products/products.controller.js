(function() {
  "use strict";

  var productsController = function($scope) {
    $scope.text = "Products page";
  };

  module.exports = {
    name: "productsController",
    type: "controller",
    func: productsController
  };

})();
