(function() {
    angular.module("configuration", ['environment'])
      .config(EnvironmentConfig)

    EnvironmentConfig.$inject = ["envServiceProvider"]

    function EnvironmentConfig(envServiceProvider) {
      envServiceProvider.config({
        domains: {
          development: ['localhost'],
          production: ['compoundinterest.io']
        },
        vars: {
          development: {
          },
          production: {
          }
        }
      })
      envServiceProvider.check();
    };
}());
