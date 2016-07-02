(function() {
  "use strict";

  module.exports = function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider.otherwise({
      redirectTo: "/"
    });

  };

})();
