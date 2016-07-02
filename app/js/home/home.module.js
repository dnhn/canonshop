(function() {
  "use strict";

  var homeModule = angular.module("home", []);

  homeModule.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "./app/js/home/home.html",
      controller: "homeController"
    });
  });

  var controller = require("./home.controller");
  homeModule.controller(controller.name, controller.func);

  module.exports = homeModule;

})();
