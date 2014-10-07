var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')
var auth = require('../../lib/auth')
var config = require('../../lib/config')

var app = angular.module('Home',[
	shadowfax.name,
	auth.name,
	config.name
])
.controller('HomeController', function($scope, config, LoginAttempt){

	$scope.config = config
	
	$scope.$on('shadowfax:signup', function(){
		document.location = '/register.html'
	})

	$scope.$on('shadowfax:login', function(data){
		LoginAttempt(data)
	})

})