(function() {
  angular.module('main.controller', [])
    .controller('mainCtrl', MainController);

  MainController.$inject = [];

  function MainController() {
    var main = this;

    main.DEFAULT_TEXT = "Hello World"
    main.text = main.DEFAULT_TEXT;

    main.successClicked = function() {
      main.setText('success');
    };
    main.failClicked = function() {
      main.setText('fail');
    };
    main.reset = function() {
      main.setText(null);
    };

    main.setText = function(status) {
      switch (status) {
        case ('fail'):
          main.text = "<span class='text-danger' id='fail-text'>You have failed :(</span>"
          break;
        case ('success'):
          main.text = "<span class='text-success' id='success-text'>You are successful!</span>"
          break;
        default:
          main.text = main.DEFAULT_TEXT;
          break;
      }
    }
  };
}());
