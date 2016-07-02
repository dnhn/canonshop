(function() {
  "use strict";
  
  var contactModule = angular.module("contact", []);

  contactModule.config(function($routeProvider) {
    $routeProvider.when("/contact", {
      templateUrl: "./app/js/contact/contact.html",
      controller: "contactController"
    });
  });

  var controller = require("./contact.controller");
  contactModule.controller(controller.name, controller.func);

  module.export = contactModule;

})();
