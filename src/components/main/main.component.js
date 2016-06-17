(function() {
  angular.module('main', [])
    .controller('mainCtrl', MainController);

  MainController.$inject = [];

  function MainController() {
    var main = this;

    var DEFAULT_TEXT = "Hello World"
    main.text = DEFAULT_TEXT;

    main.successClicked = function() {
      main.text = "<span class='text-success' id='success-text'>You are successful!</span>"
    };
    main.failClicked = function() {
      main.text = "<span class='text-danger' id='fail-text'>You have failed :(</span>"
    };
    main.reset = function() {
      main.text = DEFAULT_TEXT;
    };
  };
}());
