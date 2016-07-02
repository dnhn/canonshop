(function() {
  "use strict";
  var productsModule = angular.module("products", []);

  productsModule.config(function($routeProvider) {
    $routeProvider.when("/products", {
      templateUrl: "./app/js/products/products.html",
      controller: "productsController"
    });
  });

  var controller = require("./products.controller");
  productsModule.controller(controller.name, controller.func);

  module.exports = productsModule;

})();
