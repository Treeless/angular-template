(function() {
  angular.module('main', [])
    .controller('mainCtrl', MainController);

  MainController.$inject = [];

  function MainController() {
    var main = this;
  };
}());
