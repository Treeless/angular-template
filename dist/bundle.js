!function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var a="function"==typeof require&&require;if(!u&&a)return a(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[c]={exports:{}};n[c][0].call(l.exports,function(e){var t=n[c][1][e];return r(t?t:e)},l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){!function(){function e(){}function n(e){e.when("/",{templateUrl:"src/components/main/main.template.html",controller:"mainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/oops"})}angular.module("webapp",["ngRoute","ngSanitize","main"]).run(e).config(n),e.$inject=[],n.$inject=["$routeProvider"]}()},{}],2:[function(e,n,t){!function(){function e(){var e=this;e.DEFAULT_TEXT="Hello World",e.text=e.DEFAULT_TEXT,e.successClicked=function(){e.setText("success")},e.failClicked=function(){e.setText("fail")},e.reset=function(){e.setText(null)},e.setText=function(n){switch(n){case"fail":e.text="<span class='text-danger' id='fail-text'>You have failed :(</span>";break;case"success":e.text="<span class='text-success' id='success-text'>You are successful!</span>";break;default:e.text=e.DEFAULT_TEXT}}}angular.module("main",[]).controller("mainCtrl",e),e.$inject=[]}()},{}],3:[function(e,n,t){!function(){function e(e){e.config({domains:{development:["localhost"],production:["example.com"]},vars:{development:{},production:{}}}),e.check()}angular.module("configuration",["environment"]).config(e),e.$inject=["envServiceProvider"]}()},{}]},{},[1,3,2]);
//# sourceMappingURL=bundle.js.map
