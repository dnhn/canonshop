(function() {
  "use strict";
  var commonModule = angular.module("common", []);

  var commonController = require("./common.controller"),
      commonFactory = require("./common.factory"),
      autoFocusDirective = require("./autofocus.directive");
  commonModule
    .controller(commonController.name, commonController.func)
    .factory(commonFactory.name, commonFactory.func)
    .directive(autoFocusDirective.name, autoFocusDirective.func);

  module.exports = commonModule;

})();
