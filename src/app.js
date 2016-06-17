(function() {
  angular.module('webapp', ['ngRoute', 'ngSanitize', 'main'])
    .run(Run)
    .config(Config);

  Run.$inject = [];

  function Run() {};

  Config.$inject = ['$routeProvider'];

  function Config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/components/main/main.template.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/oops'
      });
  };
}());
