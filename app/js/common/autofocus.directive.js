(function() {
  "use strict";

  var autoFocus = function($timeout) {
    return {
      restrict: "A",
      link: function($scope, $element, $attr) {
        $timeout(function() { $element.focus(); }, 0);
      }
    }
  };

  module.exports = {
    name: "autoFocus",
    type: "directive",
    func: autoFocus
  };

})();
