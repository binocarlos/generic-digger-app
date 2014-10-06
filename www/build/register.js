require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({8:[function(require,module,exports){
var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')

var app = angular.module('Register',[
    shadowfax.name
])
.controller('RegisterController', function($scope){

	console.log('-------------------------------------------');
	console.log('we are in the register controller')

})
},{"angular-bsfy":1,"shadowfax":3}]},{},[8]);
