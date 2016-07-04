(function() {
  "use strict";

  var contactController = function($scope) {
    $scope.text = "Contact us";
    $scope.isSuccess = false;
    $scope.isNameValid =
    $scope.isEmailValid =
    $scope.isMsgValid = true;
    $scope.contactSubmit = function(isValid, name, email, msg) {
      $scope.isSuccess = false;
      $scope.isNameValid =
      $scope.isEmailValid =
      $scope.isMsgValid = true;
      if(!isValid) {
        if(!name) {
          $scope.isNameValid = false;
        }
        if(!email) {
          $scope.isEmailValid = false;
        }
        if(!msg) {
          $scope.isMsgValid = false;
        }
      } else {
        $scope.isNameValid =
        $scope.isEmailValid =
        $scope.isMsgValid = true;
        $scope.isSuccess = true;
      }
    }
  };

  module.exports = {
    name: "contactController",
    type: "controller",
    func: contactController
  };

})();
