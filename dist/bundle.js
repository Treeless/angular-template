!function n(o,e,r){function t(c,u){if(!e[c]){if(!o[c]){var f="function"==typeof require&&require;if(!u&&f)return f(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=e[c]={exports:{}};o[c][0].call(l.exports,function(n){var e=o[c][1][n];return t(e?e:n)},l,l.exports,n,o,e,r)}return e[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)t(r[c]);return t}({1:[function(n,o,e){!function(){function n(){}function o(n){n.when("/",{templateUrl:"src/components/main/main.template.html",controller:"mainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/oops"})}angular.module("interestApp",["ngRoute","main"]).run(n).config(o),n.$inject=[],o.$inject=["$routeProvider"]}()},{}],2:[function(n,o,e){!function(){function n(){}angular.module("main",[]).controller("mainCtrl",n),n.$inject=[]}()},{}],3:[function(n,o,e){!function(){function n(n){n.config({domains:{development:["localhost"],production:["compoundinterest.io"]},vars:{development:{},production:{}}}),n.check()}angular.module("configuration",["environment"]).config(n),n.$inject=["envServiceProvider"]}()},{}]},{},[1,3,2]);
//# sourceMappingURL=bundle.js.map