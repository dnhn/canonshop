(function() {
  "use strict";
  var commonController = function($scope, commonFactory) {
    $scope.siteData = commonFactory.getSiteData();
    $scope.nav = $scope.siteData.nav;
    $scope.footer = $scope.siteData.footer;

  };

  module.exports = {
    name: "commonController",
    type: "controller",
    func: commonController
  };

})();
