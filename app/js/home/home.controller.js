(function() {
  "use strict";

  var homeController = function($rootScope, $scope, $timeout) {
    $rootScope.pageTitle = "Home";

    $scope.content = {
      "slider": [
        "https://images.unsplash.com/photo-1423935645335-eff327cd5d96?dpr=1&auto=format&crop=entropy&fit=crop&w=1000&h=400&q=50",
        "https://images.unsplash.com/uploads/141219324227007364f95/be0967a3?dpr=1&auto=format&crop=entropy&fit=crop&w=1000&q=50",
        "https://images.unsplash.com/photo-1455321803702-557b68a4941b?dpr=1&auto=format&crop=entropy&fit=crop&w=1000&q=50",
        "https://images.unsplash.com/photo-1464397084257-576d657be142?dpr=1&auto=format&crop=entropy&fit=crop&w=1000&q=50"
      ],
      "jumbo": {
        "title": "Welcome to Canon Shop",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "button": { "title": "View our products", "link": "#/products" }
      }
    };

    $timeout(function() {
      $(".slider").slick({
        autoplay: true,
        cssEase: "ease-out",
        fade: true,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 1000
      });
    }, 0);

  };

  module.exports = {
    name: "homeController",
    type: "controller",
    func: homeController
  };

})();
