var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')
var auth = require('../../lib/auth')
var config = require('../../lib/config')

var app = angular.module('Register',[
  shadowfax.name,
	auth.name,
	config.name
])
.controller('RegisterController', function($scope, config){

	$scope.config = config

	$scope.$on('shadowfax:login', function(data){
		LoginAttempt(data)
	})
	

})