var angular = require('angular-bsfy')
var shadowfax = require('shadowfax')
var auth = require('../../lib/auth')

var app = angular.module('Home',[
	shadowfax.name,
	auth.name
])
.controller('HomeController', function($scope, LoginAttempt){

	$scope.$on('shadowfax:signup', function(){
		document.location = '/register.html'
	})

	$scope.$on('shadowfax:login', function(data){
		LoginAttempt(data)
	})

})