var angular = require('angular-bsfy')

var app = angular.module('Register',[
  require('../lib/auth').name,
	require('../lib/config').name,
	require('../lib/debug').name,
	require('../lib/widgets').name
])
.controller('RegisterController', function($scope, config, debug){
	var log = debug('controller:register')
	log('begin')
	console.log('-------------------------------------------');
	console.log('HERE WE ARE')
	$scope.config = config
})