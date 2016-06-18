exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/*.js'],
  framework: 'mocha',
  capabilities: {
    browserName: 'chrome'
  },
  mochaOpts: {
    reporter: "spec",
    slow: 3000
  }
};
