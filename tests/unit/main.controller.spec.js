describe('MainController', function() {
  var app,
    controllerInstance;

  beforeEach(function() {
    module('webapp');
  });

  beforeEach(inject(function($injector) {
    app = angular.module('webapp');

    // The $controller service is used to create instances of controllers
    var $controller = $injector.get('$controller');
    controllerInstance = function() {
      return $controller('mainCtrl', {});
    };
  }));

  describe('#successClicked', function() {
    it('sets text to the the proper message', function() {
      var mainController = controllerInstance();
      mainController.successClicked();
      expect(mainController.text).to.contain('success-text');
    });
  });

  describe('#failClicked', function() {
    it('sets text to the the proper message', function() {
      var mainController = controllerInstance();
      mainController.failClicked();
      expect(mainController.text).to.contain('fail-text');
    });
  });

  describe('#reset', function() {
    it('reset the text to back to the default text', function() {
      var mainController = controllerInstance();
      mainController.reset();
      expect(mainController.text).to.equal(mainController.DEFAULT_TEXT);
    });
  });

  describe('#setText', function() {
    context('sets the text based on the status given', function() {
      it("'fail' status sets the proper failure text", function() {
        var mainController = controllerInstance();
        mainController.setText('fail');
        expect(mainController.text).to.contain('fail-text');
      });

      it("'success' status sets the proper success text", function() {
        var mainController = controllerInstance();
        mainController.setText('success');
        expect(mainController.text).to.contain('success-text');
      });

      it("any other status sets the text back to default", function() {
        var mainController = controllerInstance();
        mainController.setText(null);
        expect(mainController.text).to.equal(mainController.DEFAULT_TEXT);
      });
    });
  });

});
