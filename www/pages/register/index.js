var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')
var auth = require('../../lib/auth')

var app = angular.module('Register',[
  shadowfax.name,
	auth.name
])
.controller('RegisterController', function($scope){

	$scope.$on('shadowfax:login', function(data){
		LoginAttempt(data)
	})
	

})