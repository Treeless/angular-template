(function() {
  angular.module('nav.controller', [])
    .controller('navCtrl', NavController);

  NavController.$inject = [];

  function NavController() {
    var nav = this;
  };
}());
