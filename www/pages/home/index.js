var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')
var auth = require('../../lib/auth')
var config = require('../../lib/config')
var log = require('../../../lib/log')('page:home')

var app = angular.module('Home',[
	shadowfax.name,
	auth.name,
	config.name
])
.controller('HomeController', function($scope, config, AuthEvents){

	log('home controller begin')

	$scope.config = config

	AuthEvents($scope)
})