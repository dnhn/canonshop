(function() {
  "use strict";

  var productsController = function($rootScope, $scope) {
    $rootScope.pageTitle = "Products";
    $scope.text = "Products page";
  };

  module.exports = {
    name: "productsController",
    type: "controller",
    func: productsController
  };

})();
