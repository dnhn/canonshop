(function() {
  "use strict";

  var contactController = function($rootScope, $scope) {
    $rootScope.pageTitle = "Contact Us";
    $scope.text = "Contact us";

    $scope.isSuccess = false;
    $scope.isNameValid =
    $scope.isEmailValid =
    $scope.isMsgValid = true;
    $scope.contactSubmit = function(form, isValid, name, email, msg) {
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
        $scope.isMsgValid =
        $scope.isSuccess = true;
        $scope.contact = {
          name: "",
          email: "",
          phone: "",
          message: ""
        };
      }
    }
  };

  module.exports = {
    name: "contactController",
    type: "controller",
    func: contactController
  };

})();
