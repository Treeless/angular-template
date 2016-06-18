(function() {
  angular.module('nav.directive', ['nav.controller'])
    .directive('navbar', function() {
      return {
        restrict: 'E',
        templateUrl: '../src/components/nav/nav.template.html',
        controller: 'navCtrl',
        controllerAs: 'nav'
      };
    });
}());
