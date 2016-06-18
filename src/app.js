(function() {
  angular.module('webapp', [
      'ngRoute',
      'ngSanitize',
      'environment',
      'configuration',
      'LocalStorageModule',
      'ui.bootstrap',
      'main',
      'nav'
    ])
    .run(Run)
    .config(Config);

  Run.$inject = [];

  function Run() {};

  Config.$inject = ['$routeProvider', '$locationProvider', '$compileProvider', 'localStorageServiceProvider'];

  function Config($routeProvider, $locationProvider, $compileProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/components/main/main.template.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/oops'
      });

    localStorageServiceProvider.setPrefix('webapp.');
    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
  };
}());
