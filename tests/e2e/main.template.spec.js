var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('main', function() {

  var mainMessage = element(by.id('main-message'));
  var successBtn = element(by.id('success-btn'));
  var failBtn = element(by.id('fail-btn'));
  var resetBtn = element(by.id('reset-btn'));

  beforeEach(function(done) {
    browser.get('http://localhost:8000/#/');
    done();
  });

  it('initially says hello world', function(done) {
    expect(mainMessage.getText()).to.eventually.equal('Hello World');
    done();
  });

  it('changes to success message on click of success button', function(done) {
    successBtn.click();
    expect(mainMessage.getText()).to.eventually.contain('success');
    done();
  });

  it('changes to fail message on click of fail button', function(done) {
    failBtn.click();
    expect(mainMessage.getText()).to.eventually.contain('fail');
    done();
  });

  it('clicking the reset button sets the text back to hello world', function(done) {
    failBtn.click();
    resetBtn.click();
    expect(mainMessage.getText()).to.eventually.equal('Hello World');
    done();
  });

});
