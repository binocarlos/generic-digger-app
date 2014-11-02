var angular = require('angular-bsfy')

var app = angular.module('Home',[
	require('../lib/auth').name,
	require('../lib/config').name,
	require('../lib/debug').name,
	require('../lib/widgets').name
])
.controller('HomeController', function($scope, config, debug){
	var log = debug('controller:home')
	log('begin')
	$scope.config = config
})