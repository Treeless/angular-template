!function n(e,t,o){function r(c,a){if(!t[c]){if(!e[c]){var l="function"==typeof require&&require;if(!a&&l)return l(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var s=t[c]={exports:{}};e[c][0].call(s.exports,function(n){var t=e[c][1][n];return r(t?t:n)},s,s.exports,n,e,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(n,e,t){!function(){function n(){}function e(n,e,t,o){n.when("/",{templateUrl:"src/components/main/main.template.html",controller:"mainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/oops"}),o.setPrefix("webapp."),e.html5Mode(!0),t.debugInfoEnabled(!1)}angular.module("webapp",["ngRoute","ngSanitize","environment","configuration","LocalStorageModule","ui.bootstrap","main","nav"]).run(n).config(e),n.$inject=[],e.$inject=["$routeProvider","$locationProvider","$compileProvider","localStorageServiceProvider"]}()},{}],2:[function(n,e,t){!function(){function n(){var n=this;n.DEFAULT_TEXT="Hello World",n.text=n.DEFAULT_TEXT,n.successClicked=function(){n.setText("success")},n.failClicked=function(){n.setText("fail")},n.reset=function(){n.setText(null)},n.setText=function(e){switch(e){case"fail":n.text="<span class='text-danger' id='fail-text'>You have failed :(</span>";break;case"success":n.text="<span class='text-success' id='success-text'>You are successful!</span>";break;default:n.text=n.DEFAULT_TEXT}}}angular.module("main.controller",[]).controller("mainCtrl",n),n.$inject=[]}()},{}],3:[function(n,e,t){!function(){angular.module("main",["main.controller"])}()},{}],4:[function(n,e,t){!function(){function n(){}angular.module("nav.controller",[]).controller("navCtrl",n),n.$inject=[]}()},{}],5:[function(n,e,t){!function(){angular.module("nav.directive",["nav.controller"]).directive("navbar",function(){return{restrict:"E",templateUrl:"../src/components/nav/nav.template.html",controller:"navCtrl",controllerAs:"nav"}})}()},{}],6:[function(n,e,t){!function(){angular.module("nav",["nav.directive"])}()},{}],7:[function(n,e,t){!function(){function n(n){n.config({domains:{development:["localhost"],production:["example.com"]},vars:{development:{},production:{}}}),n.check()}angular.module("configuration",["environment"]).config(n),n.$inject=["envServiceProvider"]}()},{}]},{},[1,7,2,3,4,5,6]);
//# sourceMappingURL=bundle.js.map
